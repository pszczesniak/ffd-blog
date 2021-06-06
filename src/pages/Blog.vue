<template>
  <Layout>
    <header>
      <div class="container">
        <h1>Blog</h1>
      </div>
    </header>

    <main class="container">
      <BlogPostList :posts="$page.posts.edges" />
    </main>
  </Layout>
</template>

<script>
import BlogPostList from '~/components/BlogPostList.vue';

export default {
  metaInfo: {
    title: 'Blog',
  },
  components: {
    BlogPostList,
  },
};
</script>

<page-query>
query {
  posts: allBlogPost {
    edges {
      node {
        id
        title
        date (format: "MMMM D, YYYY")
        path
        tags {
          id
          title
          path
        }
      }
    }
  }
}
</page-query>

<style lang="scss" scoped>
h1 {
  font: {
    size: 6em;
    weight: bold;
  }
  margin: 0;
  line-height: 1;
  background: linear-gradient(to left, var(--gradient-from-color), var(--gradient-to-color) 100%);
  background-position: 0 100%;
  background-size: 100% 20px;
  background-repeat: repeat-x;
}
</style>
