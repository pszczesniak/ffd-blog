<template>
  <div>
    <div class="navbar">
      <div class="container">
        <strong>
          <g-link to="/">{{ $static.metadata.siteName }}</g-link>
        </strong>
        <nav class="nav">
          <ToggleTheme />
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
  background-color: var(--bg-color);

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
  position: relative;
  margin-left: 20px;
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
  position: relative;
  white-space: nowrap;
  color: var(--link-color);
  text-decoration: none;

  @include sizeAboveFullHD('font-size', 18);

  &:before,
  &:after {
    content: ' ';
    position: absolute;
    width: 100%;
    height: 1px;
    background: currentColor;
    top: -3px;
    left: 0;
    pointer-events: none;
  }

  &:before {
    height: 28px;
    top: -3px;
    opacity: 0;
    background: linear-gradient(180deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%);
  }

  &:after {
    transition: opacity 0.3s;
    opacity: 0;
    transition-delay: 0s;
  }

  &:hover {
    &:before {
      opacity: 1;
      animation: lineUp 0.3s ease forwards;
    }

    &:after {
      opacity: 1;
      transition-delay: 0.3s;
    }
  }

  &.active {
    &:before {
      opacity: 1;
      animation: lineUp 0.0s ease forwards;
    }
  }
}

@keyframes lineUp {
  0% {
      transform-origin: 50% 100%;
      transform: scale3d(1, 0.045, 1);
  }

  50% {
      transform-origin: 50% 100%;
      transform: scale3d(1, 1, 1);
  }

  51% {
      transform-origin: 50% 0%;
      transform: scale3d(1, 1, 1);
  }

  100% {
      transform-origin: 50% 0%;
      transform: scale3d(1, 0.045, 1);
  }
}

</style>
