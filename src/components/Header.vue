<template>
  <div class="header">
    <div class="headerText">
      <span>SUPER FAMOUS MIKE</span>
    </div>
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
    text-align: center;
    padding: 10px;
    border: 1px solid var(--dark-primary-color);
    margin: 10px;
    border-radius: 2px;
    background: var(--white);
    box-shadow: 5px 5px var(--divider-color);
  }

  .headerText {
    display: inline-block;
  }

  .headerText span {
    font-size: 24px;
    display: block;
  }
</style>
