<template>
  <div class="post-list">
    <article class="post" v-for="post in posts" :key="post.node.id">

      <g-link
        :to="post.node.path"
        class="post__link"
      >

        <h3 class="post__title">{{ post.node.title }}</h3>
        <p class="post__pub-date">Published on {{ post.node.date }}</p>
      </g-link>

      <!-- <div class="post__footer">
        <PostTags :post="post.node" />
      </div> -->
    </article>
  </div>
</template>

<script>
import PostTags from '~/components/PostTags';

export default {
  props: ["posts"],
  components: {
    PostTags,
  },
};
</script>

<style lang="scss">
.post {
  padding: 12px 0;

  @media screen and (max-width: 768px) {
    padding: 0 0 36px 0;
  }

  &-list {
    margin-top: 60px;
  }

  &__link {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    color: var(--blog-link-color); 
    text-decoration-color: var(--link-color);
    text-underline-offset: 2px;
    transition: text-decoration-color 0.3s;

    @media screen and (max-width: 768px) {
      display: block;
      text-underline-offset: 3px;
      text-decoration-thickness: 4px;
    }

    // hover state only when is supportedby device (disable it on mobiles)
    @media (hover: hover) {
      &:hover {
        text-decoration-color: var(--gradient-from-color);
      }
    }
  }

  &__title {
    margin: 0;
    font: {
      size: 24px;
    }

    @media screen and (max-width: 768px) {
      font-size: 32px;
      margin-bottom: 8px;
    }
  }

  &__pub-date {
    margin: 0;
  }
}
</style>
