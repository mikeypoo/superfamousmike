<template>
  <div class="header">
    <span class="headerText">super famous mike</span>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {}
}
</script>

<style scoped>
  .header {
    text-align: left;
    padding: 40px 0 10px 10px;
    border: 1px solid var(--divider-color);
    margin: 10px;
    border-radius: 2px;
    background: var(--default-primary-color);
    box-shadow: 5px 5px var(--divider-color);
  }

  .header:hover {
    border-color: var(--light-primary-color);
    box-shadow: 5px 5px var(--light-primary-color);
  }

  .headerText {
    font-size: 24px;
  }
</style>
