<template>
  <div class="siteLink">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'SiteLink'
}
</script>

<style scoped>
  @import "../global.css";
  .siteLink {
    font-weight: bold;
    cursor: pointer;
    text-transform: uppercase;
    letter-spacing: 3px;
    display: none;
  }

  .siteLink:hover {
    color: var(--super-famous-green);
  }
</style>

