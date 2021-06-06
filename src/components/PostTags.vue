<template>
   <div class="post-tags">
   		<g-link class="post-tags__link" v-for="tag in post.tags" :key="tag.id" :to="tag.path">
   			<span>#</span> {{ tag.title }}
   		</g-link>
    </div>
</template>

<script>
export default {
  props: ['post']
}
</script>

<style lang="scss">
.post-tags {
  margin: 1rem 0 0 0;

  &__link {
    margin-right: .7em;
    font-size: .8em;
    font-weight: 600;
    color: var(--bg-color);
    text-decoration: none;
    background-color: var(--body-color);
    padding: .5em;
    border-radius: var(--radius);
    transition: color 0.25s, background-color 0.25s;

    &:hover {
      background-color: var(--gradient-to-color);
      color: var(--blog-link-color);
    }
  }
}
</style>