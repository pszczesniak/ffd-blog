<template>
  <div>
    <div class="navbar">
      <div class="container">
        <strong>
          <g-link to="/">{{ $static.metadata.siteName }}</g-link>
        </strong>
        <nav class="nav">
          <ToggleTheme />
          <!-- <g-link class="nav__link" to="/">Home</g-link> -->
          <g-link class="nav__link" to="/blog">Blog</g-link>
          <g-link class="nav__link" to="/about/">About</g-link>
        </nav>
      </div>
    </div>

    <slot />

    <div class="footer container">
      <p>
        Built with
        <a class="link" href="//gridsome.org">Gridsome</a>
        & Made with ❤️ by
        <a class="link" href="https://www.linkedin.com/in/piotrszczesniak/">Piotrek Szczęśniak</a>
      </p>
    </div>
  </div>
</template>

<script>
import ToggleTheme from '~/components/ToggleTheme.vue';
export default {
  components: {
    ToggleTheme
  }
}
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style lang="scss">
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  margin-bottom: 20px;
  height: 80px;
  display: flex;
  backdrop-filter: blur(4px);

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}

.footer {
  margin-top: 64px;
  text-align: center;
}

.nav__link {
  margin-left: 20px;
  color: var(--link-color);
  text-decoration: none;

  &.active {
    text-decoration: underline;
  }
}
</style>
