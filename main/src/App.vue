<template>
  <div>
    <site-header />
    <intro-section />
    <music-section />
    <photo-header />
    <photo-gallery />
    <dev-stats/>
    <site-footer />
  </div>
</template>

<script>
import SiteHeader from "./components/SiteHeader.vue";
import IntroSection from "./components/IntroSection.vue";
import MusicSection from "./components/MusicSection.vue";
import PhotoHeader from "./components/PhotoHeader.vue";
import PhotoGallery from "./components/PhotoGallery.vue";
import DevStats from "./components/DevStats.vue";
import SiteFooter from "./components/SiteFooter.vue";

export default {
  name: 'app',
  components: { SiteHeader, IntroSection, MusicSection, PhotoHeader, PhotoGallery, DevStats, SiteFooter },
}
</script>

<style>
  @import "./global.css";
  body {
    color: var(--super-famous-black);
    background-color: var(--super-famous-white);
    font-family: var(--super-famous-font);
    margin: 0;
  }
</style>
