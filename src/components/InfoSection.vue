<template>
  <div
    @click="showContent = !showContent"
    class="infoSection"
    :class="{ expanded: showContent }">
    {{ sectionTitle }}
    <div
      v-if="showContent"
      class="infoSection-content">
      HERE IS THE CONTENT
    </div>
  </div>
</template>

<script>
export default {
  name: 'InfoSection',
  props: {
    sectionTitle: String
  },
  data: () => {
    return {
      showContent: false
    }
  }
}
</script>

<style scoped>
  .infoSection {
    text-align: left;
    border: 1px solid var(--divider-color);
    margin: 10px;
    border-radius: 2px;
    background: var(--dark-primary-color);
    box-shadow: 5px 5px var(--divider-color);
    padding: 10px;
    cursor: pointer;
    height: 20px;
    transition: height .3s ease;
  }

  .infoSection:hover {
    border: 1px solid var(--dark-primary-color);
    background: var(--light-primary-color);
    box-shadow: 5px 5px var(--accent-color);
    color: var(--accent-color)
  }

  .expanded {
    height: 200px;
  }
</style>

