<template>
  <div class="musicSection">
    <div class="musicSection-triangle" />
    <div class="musicSection-container">
      <div class="musicSection-album">
        <h1><em>Real</em></h1>
        <div class="t-weight--light musicSection-text">The debut EP of, like, <em>really real</em> songs from</div>
        <h2>Super Famous Mike</h2>
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
        src: "music/masterpiece.mp3", 
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
    flex-direction: column;
    justify-content: space-evenly;
  }

  .musicSection-album {
    display: flex;
    flex-direction: column;
    align-content: center;
    text-align: center;
    color: var(--super-famous-white);
  }

  .musicSection-listen {
    text-align: center;
    display: flex;
    flex-direction: column;
    margin: 0 128px;
    color: var(--super-famous-white);
  }

  @media(max-width: 1001px) {
    .musicSection-listen { margin: 0 48px; }
  }

  h1 { 
    margin: 0;
    font-size: 6em;
    font-weight: 500;
    text-shadow: 8px 8px 12px var(--super-famous-black);
  }

  h2 { 
    margin: 0;
    margin-bottom: 8px;
    font-size: 2em;
    font-weight: 500;
    text-shadow: 8px 8px 8px var(--super-famous-black);
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

