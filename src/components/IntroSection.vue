<template>
  <div class="introSection">
    <span class="t-weight--light introSection-text">He's the most famous</span>
    <transition name="fade">
      <span
        v-if="showChangingText"
        class="introSection-text introSection-textThatChanges">
        {{titles[idx]}}
      </span>
    </transition>
    <span class="t-weight--light introSection-text">you've never heard of.</span>
  </div>
</template>

<script>
export default {
  name: 'IntroSection',
  computed: {
  },
  data: () => {
    return {
      titles: ["guy", "musician", "manualist", "web developer", "half-Cuban", "Android engineer", "reality TV star"],
      idx: 0,
      showChangingText: true
    };
  },
  created: function() {
    setInterval(() => {
      this.showChangingText = false;
      setTimeout(() => {
        this.idx = (this.idx + 1) % this.titles.length;
        this.showChangingText = true;
      }, 740);
    }, 3000);
  }
}
</script>

<style scoped>
  @import "../global.css";

  .introSection {
    height: 250px;
    background: var(--super-famous-green);
    color: var(--super-famous-white);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .introSection-text {
    font-size: 2em;
    margin-right: 8px;
  }

  .introSection-textThatChanges{
    border-bottom: 8px dotted var(--super-famous-black);
    color: var(--super-famous-black);
    padding-bottom: 4px;
    margin-top: 11px;
  }

  @media(max-width: 1001px) {
    .introSection { flex-direction: column; }
    .introSection-textThatChanges{ margin-bottom: 8px; }
  }

  .fade-enter-active, .fade-leave-active { transition: opacity 0.75s; }
  .fade-enter, .fade-leave-to { opacity: 0; }
</style>
