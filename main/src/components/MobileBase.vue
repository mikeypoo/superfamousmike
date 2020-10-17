<template>
  <div class="mobile-base">
    <div
      class="mobile-base__menu"
      :key="menuItem.id"
      @click="selectItem(menuItem.name)"
      v-for="menuItem in menuItems">
      <div class="mobile-base__menu-item">
        <span>{{ menuItem.name }}</span>
      </div>
    </div>
    <div class="mobile-base__bottom">
      <div class="mobile-base__title">
        <div>Super</div>
        <div>Famous</div>
        <div>Mike</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MobileBase",
  data: () => {
    return {
      menuItems: [
        { id: 1, name: "Music" },
        { id: 2, name: "Handfarts" },
        { id: 3, name: "Software" },
      ],
    };
  },
  methods: {
    selectItem: function(item) {
      console.log("ITEM CLICK", item);
    },
  },
};
</script>

<style scoped>
@import "../global.css";

.mobile-base {
  height: 100%;
  background: var(--super-famous-black);
  color: var(--super-famous-white);
}

.mobile-base__menu {
  width: 100%;
}

.mobile-base__menu-item {
  font-size: 64px;
  width: 100%;
  border-bottom: 2px solid white;
  padding-top: 16px;
  padding-left: 24px;
}

.mobile-base__title {
  text-align: left;
  margin-left: 64px;
  font-size: 64px;
  transform: rotate(-45deg);
}
</style>
