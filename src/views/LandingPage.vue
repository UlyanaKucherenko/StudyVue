<template>
  <div class="landing-page">
    <section class="landing-page__section">
      <div class="landing-page__bg"></div>
      <h1>Simple parallax sections</h1>
    </section>
    <section class="landing-page__section">
      <div class="landing-page__bg"></div>
      <h1>Simple parallax sections2</h1>
    </section>
    <section class="landing-page__section">
      <div class="landing-page__bg"></div>
      <h1>Simple parallax sections3</h1>
    </section>
    <section class="landing-page__section">
      <div class="landing-page__bg"></div>
      <h1>Simple parallax sections4</h1>
    </section>
  </div>
</template>

<script>
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
  name: "LandingPage",
  mounted() {
    gsap.utils.toArray("section").forEach((section, i) => {
      section.bg = section.querySelector(".landing-page__bg");

      // Give the backgrounds some random images
      section.bg.style.backgroundImage = `url(https://picsum.photos/${innerWidth}/${innerHeight}?random=${i})`;

      // Do the parallax effect on each section
      if (i) {
        section.bg.style.backgroundPosition = `50% ${-innerHeight / 2}px`;

        gsap.to(section.bg, {
          backgroundPosition: `50% ${innerHeight / 2}px`,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            scrub: true
          }
        });
      }

      // the first image should be positioned against the top. Use px on the animating part to work with GSAP.
      else {
        section.bg.style.backgroundPosition = "50% 0px";

        gsap.to(section.bg, {
          backgroundPosition: `50% ${innerHeight / 2}px`,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "bottom top",
            scrub: true
          }
        });
      }
    });
  }
}
</script>

<style lang="scss">
.landing-page {
  &__section {
    position: relative;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  h1 {
    color: white;
    text-shadow: 1px 1px 3px black;
    z-index: 10;
    font-size: 3em;
    font-weight: 400;
  }

}

</style>