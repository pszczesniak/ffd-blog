<template>
  <Layout>

    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <!-- <g-image alt="Example image" src="~/favicon.png" width="135" /> -->

    <header class="header">
      <div class="header__container">
        <h1 class="main-headline"><span>Frontend</span> <span>For</span> <span>Developers <em class="blinking-cursor"></em></span></h1>
      </div>
    </header>

    <main>
      <section class="section">
        <div class="container text-center">
          <h2 class="headline-2">Hi, my name is Piotrek</h2>

          <p class="lead">Currently im responsible for creating highly effective, fast, consistent and user friendly apps and websites using vanilla.js and with support of vue.js (apps), of course with semantic html and css (with all goodies that it gaves)...</p>

          <p>...and i want to share all my knowledge with you 😊</p>

          <p><g-link to="/blog">Have fun!!!!!</g-link></p>

        </div>
      </section>
    </main>

  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Front4Dev!'
  }
}
</script>

<style lang="scss">
.main-headline {
  margin: 0;
  font: {
    size: 10vw;
    family: 'Paytone One', sans-serif;
  }

  span {
    display: block;
    line-height: 0.85;

    &:nth-child(1) {
      background: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      line-height: 0.85;

     font-family: 'Dynalight', cursive;
     font-size: 15vw;
    }

    &:nth-child(2) {
      position: relative;
      text-align: center;

      &:after {
        content: '--------';
        display: inline-block;
        font-size: inherit;
        color: transparent;
        transform: translateY(-50%);

          text-decoration: underline;
        -webkit-text-decoration-color: salmon;
        text-decoration-color: salmon;
        -webkit-text-decoration-style: wavy;
        text-decoration-style: wavy;
      }
    }

    &:nth-child(3) {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      background-color: var(--body-color);
      color: var(--bg-color);
      line-height: 1;
      margin-top: 1rem;
      padding: 0 10px 10px 10px;
      text-align: right;
      font-family: 'Courier New', Courier, monospace;
      font-size: 7.5vw;

      @include sizeAboveFullHD('font-size', 140);
    }
  }
}

.header {
  min-height: calc(100vh - 80px);
  display: flex;
  width: 100%;
  align-items: center;

  &__container {
    width: 100%;
    margin: 0 auto;
    padding-left: 20px;
    padding-right: 20px;
    max-width: 960px;

    @include sizeAboveFullHD('max-width', 960);
  }
}

.blinking-cursor {
  display: inline-block;
  height: 8vw;
  width: 10px;
  border-radius: 4px;
  background-color: var(--bg-color);
  animation: 1s blink step-end infinite;

  @include sizeAboveFullHD('height', 120);
  
}

@keyframes blink {
  from, to {
    background-color: transparent;
  }
  50% {
    background-color: var(--bg-color);
  }
}

</style>
