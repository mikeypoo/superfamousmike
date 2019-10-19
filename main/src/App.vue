<template>
  <div class="appContainer">
    <div class="currentPage">
      {{ currentText }}
    </div>
    <div v-if="showActions" class="actionButtons">
      <button @click="onNext">Next</button>
    </div>
  </div>
</template>

<script>
import { asyncForEach, sleep } from "./utils/dialogue"
import pages from "./data/pages"

const CHAR_RATE = 50

export default {
  name: 'app',
  components: {},
  data: () => {
    return {
      pages,
      currentText: "",
      showActions: false,
    };
  },
  methods: {
    writePage: function(key) {
      return new Promise(async resolve => {
        this.currentText = ""
        this.showActions = false
        await asyncForEach(this.pages[key].statements, async sttmnt => {
          await asyncForEach(sttmnt.text.split(""), async char => {
            this.currentText += char
            await sleep(CHAR_RATE)
          })
          await sleep(sttmnt.timeout)
        })
        resolve()
      })
    },
    onNext: async function() {
      await this.writePage("introTwo")
      this.showActions = true
    }
  },
  async mounted () {
    await this.writePage("intro")
    this.showActions = true
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
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>
