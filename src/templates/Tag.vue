<template>
  <Layout>
    <header>
      <div class="container">
        <h1 class="headline-2 bold text-center">
          #{{ $page.tag.title }}
        </h1>
      </div>
    </header>

    <main class="container">
      <div class="posts">
        <BlogPostList :posts="$page.tag.belongsTo.edges"/>
      </div>
    </main>
  </Layout>
</template>

<page-query>
query Tag ($id: ID!) {
  tag (id: $id) {
    title
    belongsTo {
      edges {
        node {
          ...on BlogPost {
            id
            title
            path
            date (format: "MMMM D, YYYY")
            timeToRead
          }
        }
      }
    }
  }
}
</page-query>

<script>
import BlogPostList from '~/components/BlogPostList.vue';

export default {
  components: {
    BlogPostList,
  },
  metaInfo () {
    return {
      title: `Tag: ${this.$page.tag.title}`,
    }
  }
}
</script>

<style lang="scss">

</style>
