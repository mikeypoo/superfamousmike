<template>
  <div class="musicSection">
    <div class="musicSection-triangle" />
    <div class="musicSection-album">
      <h1>Real</h1>
      <div class="t-weight--light musicSection-text">Mike majored in Math, so he likes numbers. Like, he <em>really</em> likes numbers. His debut EP is called <em>Real</em> to pay homage to the set of numbers you can find on a number line - the reals. <br><br>Also, he thinks the songs on it are... real good. 😅</div>
    </div>
    <div class="t-weight--light musicSection-listen">
      <div>Have a listen to one of the singles from the EP titled <em>Masterpiece</em></div>
      <div class="musicSection-player">Here goes the player</div>
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
    width: 45%;
    text-align: center;
    margin-left: 16px;
    margin-top: 32px;
    color: var(--super-famous-white);
  }

  .musicSection-listen {
    position: absolute;
    top: 50%;
    right: 0;
    width: 45%;
    text-align: center;
    margin-right: 16px;
    margin-top: 48px;
    color: var(--super-famous-white);
  }

  h1 { 
    margin-bottom: 16px;
    font-size: 4em;
    margin: 0;
    font-size: 4em;
    margin-bottom: 16px;
    font-weight: 500;
  }

  .musicSection-triangle {
    width: 100%;
    height: 100%;
    background-image: linear-gradient(to right bottom, var(--super-famous-green) 50%, var(--super-famous-black) 50%);
  }
</style>

