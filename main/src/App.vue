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
@import url("https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap");

body {
  color: var(--super-famous-black);
  background: black;
  font-family: var(--super-famous-font);
  margin: 0;
}

.app-root {
  height: 100vh;
  overflow: hidden;
  max-width: 500px;
  margin: auto;
  border-radius: 5px;
}
</style>
