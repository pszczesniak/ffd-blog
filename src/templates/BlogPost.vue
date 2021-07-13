<template>
  <Layout>
    <article class="container-small">
      <header class="article-header">
        <p class="article-header__date">Published on <time :datetime="new Date($page.post.date).toISOString()">{{ $page.post.date }}</time></p>
        <h2 class="article-header__headline">{{ $page.post.title }}</h2>

        <p class="article-header__time-to-read">
          ⌚ <span>{{ $page.post.timeToRead }}min to read</span>
        </p>
      </header>

      <div class="post__footer text-center">
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
.article-header {
  padding-top: 36px;

  &__time-to-read {
    padding: {
      top: 1.5rem;
      bottom: 1.5rem;
    }
    text-align: center;
  }

  &__date {
    font-size: 80%;
    font-weight: bold;
    text-align: right;
  }

  &__headline {
    margin: 0;
        font: {
      size: 4em;
      weight: bold;
    }
    line-height: 1;
    background: linear-gradient(to left, var(--gradient-from-color), var(--gradient-to-color) 100%);
    background-position: 0 100%;
    background-size: 100% 20px;
    background-repeat: repeat-x;

    @include sizeAboveFullHD('font-size', 64);

    @media screen and (min-width: 1921px) {
      background-size: 100% 1.4652vw;
    }
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
