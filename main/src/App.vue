<template>
  <div class="appContainer">
    <div :style="currentStyle">
      {{ currentText }}
    </div>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {},
  data: () => {
    return {
      statements: [
        { text: "OH!", timeout: 750, style: { fontSize: "48px"} },
        { text: "Hi!!", timeout: 1000, style: { fontSize: "64px" } },
        { text: "Welcome to my website!", timeout: 2000, fontSize: "36px" },
      ],
      currentText: "OH!",
      currentStyle: { fontSize: "48px" }
    };
  },
  mounted () {
    this.statements.forEach(sttmnt => {
      setTimeout(() => {
        this.currentText  = sttmnt.text
        this.currentStyle = sttmnt.style
      }, sttmnt.timeout)
    })

  }
}
</script>

<style>
  @import "./global.css";
  html, body, .appContainer { height: 100% }

  body {
    color: var(--super-famous-white);
    background-color: var(--super-famous-black);
    font-family: var(--super-famous-font);
    margin: 0;
  }

  .appContainer {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
