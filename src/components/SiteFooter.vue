<template>
  <div class="siteFooter">
    <div class="siteCopyright">
      &copy; Mike McGowan 2018
    </div>
    <site-link>Bio</site-link>
    <site-link>Contact</site-link>
  </div>
</template>

<script>
import SiteLink from "./SiteLink.vue";
export default {
  name: 'SiteFooter',
  components: { SiteLink }
}
</script>

<style scoped>
  @import "../global.css";

  .siteFooter {
    border-top: 1px solid var(--super-famous-black);
    padding: 16px 48px;
    display: flex;
    justify-content: space-around;
  }
</style>
