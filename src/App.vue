<template>
  <div id="app">
    <div class="appContainer">
      <div class="appHeader">SUPER FAMOUS MIKE</div>
    </div>
    <div class="flipContainer">
      <div class="flipContainer-body">
        <div
          :class="{ 'flipTab-man--left': activeState === 'theMan', 'flipTab-man--right': activeState !== 'theMan' }"
          class="flipTab"
          @click="activeState = 'theMan'">
          THE MAN
        </div>
        <div
          :class="{ 'flipTab-musician--left': activeState === 'theMusician', 'flipTab-musician--right': activeState !== 'theMusician' }"
          class="flipTab"
          @click="activeState = 'theMusician'">
          THE MUSICIAN
        </div>
        <div class="flipContainer-bodyContent">
          {{ states[activeState].text }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: { },
  data: () => {
    return {
      activeState: "theMan",
      states: {
        theMan: { text: "I AM THE MAN" },
        theMusician: { text: "I AM THE MUSICIAN" }
      }
    }
  }
}
</script>

<style>
  body {
    background-color: #2b2b2b;
    color: white;
    font-family: 'Tenor Sans', sans-serif;
  }

  .appContainer {
    display: flex;
    justify-content: center;
  }
  
  .appHeader {
    margin: 24px;
    font-size: 48px;
  }

  .flipContainer {
    display: flex;
    width: 100%;
  }

  .flipContainer-body {
    flex-grow: 1;
    border: 2px solid #2b2b2b;
    min-height: 500px;
    position: relative;
    margin: 0 60px;
    background: white;
    color: #2b2b2b;
  }

  .flipContainer-bodyContent {
    display: flex;
    justify-content: center;
  }

  .flipTab {
    cursor: pointer;
    display: flex;
    justify-content: center;
    padding: 12px;
    border: 2px solid #2b2b2b;
    position: absolute;
    background: white;
    color: #2b2b2b;
  }

  .flipTab-man--right {
    transform: rotate(90deg);
    transform-origin: right;
    right: -23px;
    top: 75px;
  }

  .flipTab-man--left {
    border-bottom: 2px solid white;
    transform: rotate(-90deg);
    transform-origin: right;
    left: -123px;
    top: -23px;
  }

  .flipTab-musician--right {
    transform: rotate(90deg);
    transform-origin: left;
    right: -166px;
    top: 74px;
  }

  .flipTab-musician--left {
    border-bottom: 2px solid white;
    transform: rotate(-90deg);
    transform-origin: left;
    left: -23px;
    top: 215px;
  }
</style>
