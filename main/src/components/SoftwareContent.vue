<template>
  <submenu-content title="Software" :idToUrl="idToUrl" :links="softwareLinks" :active="active" :eventHub="eventHub" />
</template>

<script>
const idToUrl = {
  0: "https://github.com/mikeypoo/superfamousmike",
  1: "https://www.everlane.com",
  2: "https://www.indiegogo.com",
  3: "https://www.linkedin.com/in/mikedmcgowan",
};

import SubmenuContent from "./SubmenuContent.vue";

export default {
  name: "SoftwareContent",
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
    softwareLinks() {
      return [
        { id: 0, name: "Github", selected: this.active === 0 },
        { id: 1, name: "Everlane", selected: this.active === 1 },
        { id: 2, name: "Indiegogo", selected: this.active === 2 },
        { id: 3, name: "LinkedIn", selected: this.active === 3 },
      ];
    },
  },
};
</script>
