<template>
  <div class="submenu-content">
    <div class="submenu-content__title">{{title}}</div>
    <div class="submenu-content__submenu">
      <div
        class="submenu-content__submenu-item"
        :class="{ 'submenu-content__submenu-item--selected': item.selected }"
        :key="item.id"
        v-for="item in links">
        <span>{{ item.selected ? `>${item.name}` : item.name }}</span>
        <span class="submenu-content__submenu-exp"> +20EXP</span>
      </div>
    </div>
  </div>
</template>

<script>
import SubmenuContent from "./SubmenuContent.vue";

import { addEXP } from "../lib/data_service";

export default {
  name: "SubmenuContent",
  components: {
    SubmenuContent,
  },
  props: ["active", "links", "idToUrl", "title", "eventHub"],
  created() {
    this.eventHub.$on("selectInSubmenu", () => {
      addEXP(20);
      window.open(this.idToUrl[this.active], "_blank");
    });
  },
  beforeDestroy() {
    this.eventHub.$off("selectInSubmenu");
  },
};
</script>

<style scoped>
.submenu-content {
  color: var(--super-famous-black);
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
}

.submenu-content__title {
  text-align: center;
  font-size: 18px;
  margin: 24px;
}

.submenu-content__submenu {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  justify-content: space-between;
}

.submenu-content__submenu-item {
  width: 80%;
  font-size: 10px;
  border: 1px solid var(--super-famous-black);
  border-radius: 4px;
  padding: 8px;
}

.submenu-content__submenu-item--selected {
  background: var(--super-famous-white);
  -webkit-animation: blinky 1s infinite;
  -moz-animation: blinky 1s infinite;
  -o-animation: blinky 1s infinite;
  animation: blinky 1s infinite;
}

@-webkit-keyframes blinky {
  0%,
  49% {
    background-color: var(--super-famous-white);
  }
  50%,
  100% {
    background-color: transparent;
  }
}

.submenu-content__submenu-exp {
  font-size: 8px;
  color: var(--super-famous-gray);
}
</style>
