<template>
  <div class="app-root">
    <game-boy />
  </div>
</template>

<script>
import GameBoy from "./components/GameBoy.vue";

export default {
  name: "app",
  components: {
    GameBoy,
  },
};
</script>

<style>
@import "./global.css";
body {
  color: var(--super-famous-black);
  background-color: var(--super-famous-black);
  font-family: var(--super-famous-font);
  margin: 0;
}

.app-root {
  height: 100vh;
  overflow: hidden;
  max-width: 500px;
  margin: auto;
  border: 1px solid var(--super-famous-white);
}
</style>
