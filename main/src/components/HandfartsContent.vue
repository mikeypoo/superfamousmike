<template>
  <submenu-content title="Handfarts" :idToUrl="idToUrl" :links="handfartLinks" :active="active" :eventHub="eventHub" />
</template>

<script>
const idToUrl = {
  0: "https://www.instagram.com/superfamousmike/",
  1: "https://www.youtube.com/watch?v=jqGLPyHGvVQ",
  2: "https://youtu.be/LjM_9XQfqTk",
  3: "https://www.youtube.com/watch?v=15-_Y7COWas",
};

import SubmenuContent from "./SubmenuContent.vue";

export default {
  name: "HandfartsContent",
  components: {
    SubmenuContent,
  },
  props: ["active", "eventHub"],
  data: () => {
    return {
      idToUrl,
    };
  },
  computed: {
    handfartLinks() {
      return [
        { id: 0, name: "Instagram", selected: this.active === 0 },
        { id: 1, name: "AGT", selected: this.active === 1 },
        { id: 2, name: "Gong Show", selected: this.active === 2 },
        { id: 3, name: "Amazingness", selected: this.active === 3 },
      ];
    },
  },
};
</script>
