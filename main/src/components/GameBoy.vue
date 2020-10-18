<template>
  <div class="gameboy">
    <div class="gameboy__top">
      <div class="gameboy__screen">
        <transition name="menu-slide">
          <div class="gameboy__menu" v-if="shouldShow(null)">
            <div
              class="gameboy__menu-item"
              :class="{ 'gameboy__menu-item--selected': menuItem.selected }"
              :key="menuItem.id"
              v-for="menuItem in menuItems">
              <span>{{ menuItem.name }}</span>
            </div>
          </div>
        </transition>
        <transition name="content-slide">
          <div class="gameboy__content" v-if="shouldShow(0)">
            MUSIC
          </div>
        </transition>
        <transition name="content-slide">
          <div class="gameboy__content" v-if="shouldShow(1)">
            HANDFARTS
          </div>
        </transition>
        <transition name="content-slide">
          <div class="gameboy__content" v-if="shouldShow(2)">
            SOFTWARE
          </div>
        </transition>
        <transition name="content-slide">
          <div class="gameboy__content" v-if="shouldShow(3)">
            ???
          </div>
        </transition>
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
    <div class="gameboy__hacky-fix--left">
    </div>
    <div class="gameboy__hacky-fix--right">
    </div>
  </div>
</template>

<script>
export default {
  name: "GameBoy",
  data: () => {
    return {
      active: 0,
      submenuId: null,
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
      this.active = null;
      setTimeout(() => {
        this.submenuId = chosen.id;
      }, 300);
    },
    backToMenu: function() {
      this.submenuId = null;
      setTimeout(() => {
        this.active = 0;
      }, 300);
    },
    moveBy: function(num) {
      this.active += num;

      if (this.active < 0) {
        this.active += 4;
      } else if (this.active > 3) {
        this.active -= 4;
      }
    },
    shouldShow: function(id) {
      if (id === null) {
        return this.submenuId === null;
      } else {
        return this.submenuId === id;
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
  position: relative;
}

.gameboy__top {
  flex: 15;
  display: flex;
  flex-direction: column;
}

.gameboy__screen {
  background: lightgrey;
  width: 85%;
  margin: 24px auto;
  flex-grow: 1;
  display: flex;
}

.gameboy__menu {
  flex: 1;
}

.gameboy__menu-item {
  font-size: 28px;
  height: 40px;
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
    background-color: transparent;
  }
}

.gameboy__content {
  background: transparent;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.gameboy__title {
  font-size: 18px;
  text-align: center;
  flex: 1;
}

.gameboy__bottom {
  flex: 10;
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
  font-size: 32px;
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
.gameboy__a,
.gameboy__b {
  padding-left: 5px;
}

.gameboy__buttons {
  margin-right: 10%;
  width: 120px;
}

.gameboy__a__container {
  display: flex;
  justify-content: flex-end;
}

.menu-slide-enter-active {
  transition: all 0.3s ease;
}
.menu-slide-leave-active {
  transition: all 0.3s ease;
}
.menu-slide-enter,
.menu-slide-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}

.content-slide-enter-active {
  transition: all 0.3s ease 0.3s;
}
.content-slide-leave-active {
  transition: all 0.3s ease;
}
.content-slide-enter,
.content-slide-leave-to {
  transform: translateX(100%);
  opacity: 0;
}

.gameboy__hacky-fix--left {
  position: absolute;
  height: 100%;
  width: 7.5%;
  background: var(--super-famous-black);
  top: 1px;
  left: 1px;
}

.gameboy__hacky-fix--right {
  position: absolute;
  height: 100%;
  width: 7.5%;
  background: var(--super-famous-black);
  top: 1px;
  right: 1px;
}
</style>
