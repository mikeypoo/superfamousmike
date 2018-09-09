<template>
  <div>
    <site-header />
    <intro-section />
    <section-header>Listen to his <em>feelings</em> music</section-header>
    <music-section />
    <section-header>Look at pictures of his stupid face</section-header>
    <photo-gallery />
    <section-header>Analyze these vaguley arbitrary measurements of his software skills</section-header>
    <dev-stats/>
    <site-footer />
  </div>
</template>

<script>
import SiteHeader from "./components/SiteHeader.vue";
import IntroSection from "./components/IntroSection.vue";
import SectionHeader from "./components/SectionHeader.vue";
import MusicSection from "./components/MusicSection.vue";
import PhotoGallery from "./components/PhotoGallery.vue";
import DevStats from "./components/DevStats.vue";
import SiteFooter from "./components/SiteFooter.vue";

export default {
  name: 'app',
  components: {
    SiteHeader, 
    IntroSection, 
    SectionHeader,
    MusicSection, 
    PhotoGallery, 
    DevStats, 
    SiteFooter },
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
