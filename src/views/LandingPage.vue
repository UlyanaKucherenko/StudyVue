<template>
  <div class="landing-page">
    <div class="landing-page__section">
      <div class="landing-page__bg"></div>
      <h1>Simple parallax sections</h1>
    </div>
    <div class="landing-page__section">
      <div class="landing-page__bg"></div>
      <h1>Simple parallax sections2</h1>
    </div>
    <div class="landing-page__section">
      <div class="landing-page__bg"></div>
      <h1>Simple parallax sections3</h1>
    </div>
    <div class="landing-page__section">
      <div class="landing-page__bg"></div>
      <h1>Simple parallax sections4</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "LandingPage",
}
</script>

<style lang="scss">
.landing-page {
  &__section {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 500px;
    width: 100%;
    //background: #E70BDA;
  }

  &__bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url(../assets/main-bg-1.png);
  }

  h1 {
    color: white;
    text-shadow: 1px 1px 3px black;
    z-index: 1;
    font-size: 3em;
    font-weight: 400;
  }

}

</style>