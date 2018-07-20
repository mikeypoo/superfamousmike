<template>
  <div id="app">
    <site-header />
    <music-section />
    <site-footer />
  </div>
</template>

<script>
import SiteHeader from "./components/SiteHeader.vue";
import SiteFooter from "./components/SiteFooter.vue";
import MusicSection from "./components/MusicSection.vue";

export default {
  name: 'app',
  components: { SiteHeader, SiteFooter, MusicSection },
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
