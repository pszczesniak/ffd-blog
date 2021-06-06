<template>
  <Layout>
    <article class="container">
      <header>
        <p>Published on <time :datetime="new Date($page.post.date).toISOString()">{{ $page.post.date }}</time></p>
        <h2>{{ $page.post.title }}</h2>

        <p>
          <i>{{ $page.post.timeToRead }}min to read</i>
        </p>
      </header>

      <div class="post__footer">
        <PostTags :post="$page.post" />
      </div>

      <main class="content" v-html="$page.post.content"></main>
    </article>
  </Layout>
</template>

<script>
import PostTags from '~/components/PostTags';
export default {
  components: {
    PostTags
  },
  metaInfo () {
    return {
      title: this.$page.post.title,
    }
  }
}
</script>

<style lang="scss">
article > header {
  // text-align: center;

  h2 {
    font: {
      size: 4em;
      weight: bold;
    }
    margin: 0;
    line-height: 1;
    // text-decoration: underline;

    background: linear-gradient(to left, var(--gradient-from-color), var(--gradient-to-color) 100%);
    background-position: 0 100%;
    background-size: 100% 20px;
    background-repeat: repeat-x;
  }
}

.content {
  margin-top: 48px;
}
</style>

<page-query>
query Post ($path: String!) {
   post: blogPost (path: $path) {
    id
    title
    tags {
      id
      title
      path
    }
    date (format: "MMMM D, YYYY")
    timeToRead
    content
  }
}
</page-query>
