<template>
  <div class="musicSection">
    <div class="musicSection-triangle" />
    <div class="musicSection-container">
      <div class="musicSection-album">
        <h1><em>Real</em></h1>
        <h2>Super Famous Mike</h2>
        <div class="t-weight--light musicSection-text">A collection of, like, <em>real</em> songs, ya know?</div>
      </div>
      <div class="t-weight--light musicSection-listen">
        <div>Whoa! You can listen to a nice little songypoo right here!</div>
        <aplayer :music="masterpiece" />
      </div>
    </div>
  </div>
</template>

<script>
import Aplayer from "vue-aplayer";
export default {
  name: 'MusicSection',
  components: { Aplayer },
  data: () => {
    return {
      masterpiece: { 
        title: "Masterpiece", 
        artist: "Super Famous Mike", 
        src: "masterpiece.mp3", 
        pic: "mini_album.jpg" 
      }
    };
  },
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

  .musicSection-container {
    position: absolute;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .musicSection-album {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: -64px;
    margin-left: 64px;
    text-align: center;
    color: var(--super-famous-white);
  }

  .musicSection-listen {
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin-right: 64px;
    margin-bottom: 128px;
    color: var(--super-famous-white);
  }

  h1 { 
    margin: 0;
    font-size: 6em;
    font-weight: 500;
  }

  h2 { 
    margin: 0;
    margin-bottom: 8px;
    font-size: 2em;
    font-weight: 500;
  }

  .aplayer {
    margin-top: 16px;
    border: 1px solid var(--super-famous-white);
  }

  .musicSection-triangle {
    width: 100%;
    height: 100%;
    background-image: linear-gradient(to right bottom, var(--super-famous-green) 50%, var(--super-famous-black) 50%);
  }
</style>

