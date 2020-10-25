<template>
  <submenu-content title="Music" :idToUrl="idToUrl" :links="musicLinks" :active="active" :eventHub="eventHub" />
</template>

<script>
const idToUrl = {
  0: "https://open.spotify.com/artist/3AGkrCLPPee2uNR3RRCXGP",
  1: "https://www.youtube.com/user/manualistmike",
  2: "https://open.spotify.com/track/47QsOCB8bSDo4YmhbHkvCf",
  3: "https://www.youtube.com/watch?v=D73hhSVH5Es",
};

import SubmenuContent from "./SubmenuContent.vue";

export default {
  name: "MusicContent",
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
    musicLinks() {
      return [
        { id: 0, name: "Spotify", selected: this.active === 0 },
        { id: 1, name: "YouTube", selected: this.active === 1 },
        { id: 2, name: "Latest Tune", selected: this.active === 2 },
        { id: 3, name: "Music Video", selected: this.active === 3 },
      ];
    },
  },
};
</script>
