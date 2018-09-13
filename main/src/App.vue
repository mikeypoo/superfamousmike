<template>
  <div>
    <site-header />
    <intro-section />
    <section-header>Listen to his <em>feelings</em> music</section-header>
    <music-section />
    <section-header>Look at pictures of his stupid face</section-header>
    <photo-gallery />
    <section-header>Follow him on his dumb social media things</section-header>
    <social-media />
    <site-footer />
  </div>
</template>

<script>
import SiteHeader from "./components/SiteHeader.vue";
import IntroSection from "./components/IntroSection.vue";
import SectionHeader from "./components/SectionHeader.vue";
import MusicSection from "./components/MusicSection.vue";
import PhotoGallery from "./components/PhotoGallery.vue";
import SocialMedia from "./components/SocialMedia.vue";
import SiteFooter from "./components/SiteFooter.vue";

export default {
  name: 'app',
  components: {
    SiteHeader, 
    IntroSection, 
    SectionHeader,
    MusicSection, 
    PhotoGallery, 
    SocialMedia, 
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
