<template>
  <div class="bonus">
    <div class="bonus-header">
      <h2>Use this to convert hours, minutes, and seconds into a hours as a decimal</h2>
    </div>
    <div class="bonus-music">
      <div class="bonus-musicHeader">
        <input type="text" v-model="hours" placeholder="Hours">
        <input type="text" v-model="minutes" placeholder="Minutes">
        <input type="text" v-model="seconds" placeholder="Seconds">
        <div v-if="filledIn">
          <div>
            {{ hours }} hours, {{ minutes }} minutes, and {{ seconds }} seconds
          </div>
          <div>is</div>
          <div>{{ computeHours.toFixed(2) }} hours as a decimal</div>
        </div>
        <div v-if="!filledIn">
          <div>
            Fill in each input
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Aplayer from "vue-aplayer";
export default {
  name: 'app',
  components: { Aplayer },
  data: () => {
    return {
      hours: null,
      minutes: null,
      seconds: null
    }
  },
  computed: {
    filledIn: function () {
      return this.hours && this.minutes && this.seconds
    },
    computeHours: function () {
      if (this.hours && this.minutes && this.seconds) {
        const numHours = parseFloat(this.hours)
        const numMinutes = parseFloat(this.minutes)
        const numSeconds = parseFloat(this.seconds)

        const total = numHours + (numMinutes / 60) + (numSeconds / 3600)
        console.log("TOTAL", total)
        return total
      } else {
        return 0.0
      }
    }
  }
}
</script>

<style>
  @import "./global.css";
  body {
    color: var(--super-famous-white);
    background-color: var(--super-famous-black);
    font-family: var(--super-famous-font);
    margin: 0;
  }
</style>

<style scoped>
  .bonus {
    background: var(--super-famous-black);
  }

  .bonus-header {
    background: var(--super-famous-white);
    color: var(--super-famous-black);
    text-align: center;
    padding: 32px;
  }

  h2 {
    margin: 0;
    margin-bottom: 16px;
  }

  .bonus-music {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 32px;
    padding-bottom: 32px;
  }

  .bonus-musicHeader {
    text-align: center;
    padding: 32px;
  }

  .bonus-musicTracks {
    width: 100%;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .aplayer { width: 100%; }

  .bonus-follow {
    background: var(--super-famous-white);
    border-radius: 2px;
    padding: 32px;
    text-align: center;
    display: flex;
    align-items: center;
    margin-top: 32px;
    cursor: pointer;
  }

  .bonus-follow:hover {
    box-shadow: 0 0 6px 4px var(--super-famous-green);
  }
  
  .bonus-followText {
    color: var(--super-famous-black);
  }

  svg {
    height: 48px;
    width: 48px;
    margin: 0 16px;
  }

  .or {
    margin: 16px 0;
  }

  .secondaryCta {
    background: transparent;
    padding: 16px;
    border: 2px solid var(--super-famous-white);
    border-radius: 2px;
    color: var(--super-famous-white);
    cursor: pointer;
  }

  .secondaryCta:hover {
    background: var(--super-famous-white);
    color: var(--super-famous-black);
    box-shadow: 0 0 6px 4px var(--super-famous-green);
  }

  img { 
    width: 100%; 
    max-width: 600px;
    max-height: 400px;
    object-fit: contain;
  }
</style>
