<template>
  <div class="sectionHeader">
    <h3>
      <slot />
    </h3>
  </div>
</template>

<script>
export default {
  name: 'SectionHeader'
}
</script>

<style scoped>
  @import "../global.css";

  .sectionHeader {
    display: flex;
    justify-content: center;
    text-align: center;
    padding: 16px;
    background: var(--super-famous-white);
    color: var(--super-famous-black);
    border: 1px solid var(--super-famous-black);
  }
</style>

