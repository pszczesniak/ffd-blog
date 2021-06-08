<template>
  <Layout>
    <header>
      <div class="container">
        <h1>About</h1>
      </div>
    </header>
    <main class="container">
      <p>
        This is the About Page.
      </p>
    </main>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'About us',
  },
};
</script>

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