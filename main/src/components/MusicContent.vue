<template>
  <submenu-content title="Music" :idToUrl="idToUrl" :links="musicLinks" :active="active" :eventHub="eventHub" />
</template>

<script>
const idToUrl = {
  0: "https://open.spotify.com/artist/3AGkrCLPPee2uNR3RRCXGP",
  1: "https://www.youtube.com/user/manualistmike",
  2: "https://open.spotify.com/track/59nqOX0LAdBTuiQisAK16O?si=73fecb18de6f4dbc",
  3: "https://open.spotify.com/track/2ruxFoXdG2gDVUfBnBFzFb?si=0d03e67e4a6348e0",
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
        { id: 3, name: "Lawrence Feature", selected: this.active === 3 },
      ];
    },
  },
};
</script>
