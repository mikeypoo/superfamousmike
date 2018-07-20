<template>
  <div class="musicSection">
    <div class="musicSection-triangle" />
    <div class="musicSection-album">
      <h1>Real</h1>
      <h3>The debut EP</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MusicSection'
}
</script>

<style scoped>
  @import "../global.css";

  .musicSection {
    height: 500px;
    background: var(--super-famous-black);
    color: var(--super-famous-white);
    display: flex;
    position: relative;
  }

  .musicSection-album {
    position: absolute;
    top: 0;
    text-align: center;
    right: 30%;
  }

  .musicSection-triangle {
    width: 50%;
    height: 100%;
    background-image: linear-gradient(136deg, var(--super-famous-green) 50%, var(--super-famous-black) 50%);
  }
</style>

