<template>
  <div class="siteHeader">
    <site-link>Bio</site-link>
    <div class="siteHeader-title">
      <div class="siteHeader-angleLine siteHeader-angleLine--left" />
      <div class="t-weight--light">SUPER</div>
      <div class="t-weight--light siteHeader-title-middle">FAMOUS</div>
      <div class="t-weight--light siteHeader-title-bottom">MIKE</div>
      <div class="siteHeader-angleLine siteHeader-angleLine--right" />
    </div>
    <site-link>Contact</site-link>
  </div>
</template>

<script>
import SiteLink from "./SiteLink.vue";
export default {
  name: 'SiteHeader',
  components: { SiteLink }
}
</script>

<style scoped>
  @import "../global.css";
  .siteHeader {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px 48px;
    border-bottom: 1px solid var(--super-famous-black);
  }

  @media(max-width: 1001px) {
    .siteHeader { padding: 16px 24px; }
  }
  
  .siteHeader-angleLine {
    border: 2px solid var(--super-famous-green);
    transform: skew(45deg);
    height: 70px;
    position: absolute;
    top: -5px;
  }
  .siteHeader-angleLine--left { left: -16px }
  .siteHeader-angleLine--right { right: -42px; }

  .siteHeader-title {
    display: flex;
    flex-direction: column;
    width: 100px;
    font-weight: bold;
    font-size: 18px;
    position: relative;
  }

  .siteHeader-title-middle { padding-left: 25px; }
  .siteHeader-title-bottom { padding-left: 68px; }
</style>
