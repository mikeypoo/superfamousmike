<template>
  <div class="gameboy">
    <div class="gameboy__top">
      <div class="gameboy__screen">
        <div
          class="gameboy__menu-item"
          :class="{ 'gameboy__menu-item--selected': menuItem.selected }"
          :key="menuItem.id"
          v-for="menuItem in menuItems">
          <span>{{ menuItem.name }}</span>
        </div>
      </div>
    </div>
    <div class="gameboy__title">
      Super Famous Mike
    </div>
    <div class="gameboy__bottom">
      <div class="gameboy__control">
        <div class="gameboy__button gameboy__left">
          ←
        </div>
        <div class="gameboy__button gameboy__up" @click="moveBy(-1)">
          ←
        </div>
        <div class="gameboy__button gameboy__down" @click="moveBy(1)">
          ←
        </div>
        <div class="gameboy__button gameboy__right">
          ←
        </div>
      </div>
      <div class="gameboy__buttons">
        <div class="gameboy__a__container">
          <div class="gameboy__button gameboy__a" @click="selectActive()">
            A
          </div>
        </div>
        <div>
          <div class="gameboy__button gameboy__b" @click="backToMenu()">
            B
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GameBoy",
  data: () => {
    return {
      active: 0,
    };
  },
  computed: {
    menuItems() {
      return [
        { id: 0, name: "Music", selected: this.active === 0 },
        { id: 1, name: "Handfarts", selected: this.active === 1 },
        { id: 2, name: "Software", selected: this.active === 2 },
        { id: 3, name: "???", selected: this.active === 3 },
      ];
    },
  },
  methods: {
    selectActive: function() {
      const chosen = this.menuItems.find((opt) => opt.selected);
      console.log("CHOSEN", chosen);
    },
    backToMenu: function() {
      console.log("BACK TO MENU");
    },
    moveBy: function(num) {
      this.active += num;

      if (this.active < 0) {
        this.active += 4;
      } else if (this.active > 3) {
        this.active -= 4;
      }
    },
  },
};
</script>

<style scoped>
@import "../global.css";

.gameboy {
  height: 100%;
  background: var(--super-famous-black);
  color: var(--super-famous-white);
  display: flex;
  flex-direction: column;
}

.gameboy__top {
  flex-grow: 2;
  display: flex;
}

.gameboy__screen {
  background: lightgrey;
  height: 90%;
  width: 85%;
  margin: auto;
}

.gameboy__menu-item {
  font-size: 48px;
  border-bottom: 2px solid var(--super-famous-black);
  color: var(--super-famous-black);
  padding-top: 16px;
  padding-left: 24px;
}

.gameboy__menu-item--selected {
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
    background-color: lightgrey;
  }
}

.gameboy__title {
  font-size: 32px;
  text-align: center;
}

.gameboy__bottom {
  flex-grow: 3;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 10%;
}

.gameboy__control {
  width: 120px;
  height: 120px;
  display: flex;
  flex-wrap: wrap;
  transform: rotate(-45deg);
}

.gameboy__button {
  width: 50px;
  height: 50px;
  background: lightgrey;
  border-radius: 50%;
  margin: 5px;
  display: flex;
  color: var(--super-famous-black);
  justify-content: center;
  align-items: center;
  font-size: 40px;
  cursor: pointer;
}

.gameboy__left {
  transform: rotate(45deg);
}
.gameboy__up {
  transform: rotate(135deg);
}
.gameboy__down {
  transform: rotate(-45deg);
}
.gameboy__right {
  transform: rotate(-135deg);
}

.gameboy__buttons {
  margin-right: 10%;
  width: 120px;
}

.gameboy__a__container {
  display: flex;
  justify-content: flex-end;
}
</style>
