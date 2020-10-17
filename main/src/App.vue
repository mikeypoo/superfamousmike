<template>
  <div class="app-root">
    <mobile-base />
  </div>
</template>

<script>
import MobileBase from "./components/MobileBase.vue";

export default {
  name: "app",
  components: {
    MobileBase,
  },
};
</script>

<style>
@import "./global.css";
body {
  color: var(--super-famous-black);
  background-color: var(--super-famous-white);
  font-family: var(--super-famous-font);
  margin: 0;
}

.app-root {
  height: 100vh;
  overflow: hidden;
}
</style>
