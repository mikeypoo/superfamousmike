<template>
  <div class="gameboy" id="gameboy">
    <div class="gameboy__top">
      <div class="gameboy__screen">
        <transition name="menu-slide">
          <div class="gameboy__menu" v-if="shouldShow(null)">
            <div
              class="gameboy__menu-item"
              :class="{ 'gameboy__menu-item--selected': menuItem.selected }"
              :key="menuItem.id"
              v-for="menuItem in menuItems">
              <span>{{ menuItem.selected ? `>${menuItem.name}` : menuItem.name }}</span>
              <span v-if="menuItem.id === 3" class="gameboy__menu-item-exp">
                {{`${experience()}/100 EXP`}}
              </span>
            </div>
          </div>
        </transition>
        <transition name="content-slide">
          <div class="gameboy__content" v-if="shouldShow(0)">
            <music-content :active="active" :eventHub="eventHub"/>
          </div>
        </transition>
        <transition name="content-slide">
          <div class="gameboy__content" v-if="shouldShow(1)">
            <handfarts-content :active="active" :eventHub="eventHub"/>
          </div>
        </transition>
        <transition name="content-slide">
          <div class="gameboy__content" v-if="shouldShow(2)">
            <software-content :active="active" :eventHub="eventHub"/>
          </div>
        </transition>
        <transition name="content-slide">
          <div class="gameboy__content" v-if="shouldShow(3)">
            <special-content />
          </div>
        </transition>
      </div>
    </div>
    <div class="gameboy__title">
      <div>
        Super Famous Mike
      </div>
    </div>
    <div class="gameboy__bottom">
      <div class="gameboy__control">
        <div class="gameboy__button gameboy__left">
          &lt;
        </div>
        <div class="gameboy__button gameboy__up" @click="moveBy(-1)">
          &lt;
        </div>
        <div class="gameboy__button gameboy__down" @click="moveBy(1)">
          &lt;
        </div>
        <div class="gameboy__button gameboy__right">
          &lt;
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
    <div class="gameboy__hacky-fix--left" id="hacky-left">
    </div>
    <div class="gameboy__hacky-fix--right" id="hacky-right">
    </div>
    <select-color />
  </div>
</template>

<script>
import Vue from "vue";
import SubmenuContent from "./SubmenuContent.vue";
import MusicContent from "./MusicContent.vue";
import HandfartsContent from "./HandfartsContent.vue";
import SoftwareContent from "./SoftwareContent.vue";
import SpecialContent from "./SpecialContent.vue";
import SelectColor from "./SelectColor.vue";

import { init, hasEnough, addEXP, currentEXP } from "../lib/data_service";

const eventHub = new Vue();

export default {
  name: "GameBoy",
  components: {
    SubmenuContent,
    MusicContent,
    HandfartsContent,
    SoftwareContent,
    SpecialContent,
    SelectColor,
  },
  created() {
    init();
    console.error("well, aren't you clever? <3 Super Famous Mike");
  },
  data: () => {
    return {
      active: 0,
      submenuId: null,
      eventHub: eventHub,
    };
  },
  computed: {
    menuItems() {
      return [
        { id: 0, name: "Music", selected: this.active === 0 },
        { id: 1, name: "Handfarts", selected: this.active === 1 },
        { id: 2, name: "Software", selected: this.active === 2 },
        { id: 3, name: `???`, selected: this.active === 3 },
      ];
    },
  },
  methods: {
    selectActive: function() {
      if (this.submenuId !== null) {
        eventHub.$emit("selectInSubmenu");
      } else {
        const chosen = this.menuItems.find((opt) => opt.selected);

        if (chosen.id === 3 && currentEXP() < 100) {
          return;
        }

        this.active = null;
        setTimeout(() => {
          this.submenuId = chosen.id;
          this.active = 0;
        }, 300);
      }
    },
    backToMenu: function() {
      this.active = null;
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
    experience() {
      return currentEXP();
    },
  },
};
</script>

<style scoped>
@import "../global.css";

.gameboy {
  height: 90%;
  background: var(--super-famous-black);
  color: var(--super-famous-white);
  display: flex;
  flex-direction: column;
  position: relative;
  border-radius: 5px;
}

.gameboy__top {
  flex: 12;
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
  min-width: 100%;
}

.gameboy__menu-item {
  font-size: 18px;
  min-width: 100%;
  border-bottom: 2px solid var(--super-famous-black);
  color: var(--super-famous-black);
  padding: 16px 24px;
}

.gameboy__menu-item-exp {
  font-size: 12px;
  color: var(--super-famous-gray);
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
  padding-bottom: 32px;
}

.gameboy__title {
  font-size: 12px;
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
  padding-top: 3px;
  user-select: none;
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
  top: 0;
  left: 0;
  border-radius: 5px;
}

.gameboy__hacky-fix--right {
  position: absolute;
  height: 100%;
  width: 7.5%;
  background: var(--super-famous-black);
  top: 0;
  right: 0;
  border-radius: 5px;
}

.gameboy--red {
  background: #ff4f4c;
}

.gameboy--purple {
  background: #492c6e;
}

.gameboy--blue {
  background: #4a6dcc;
}

.gameboy--green {
  background: #88d14b;
}

.gameboy--yellow {
  background: #d4bb2a;
}

.gameboy__hacky-fix--left--red {
  background: #ff4f4c;
}

.gameboy__hacky-fix--left--purple {
  background: #492c6e;
}

.gameboy__hacky-fix--left--blue {
  background: #4a6dcc;
}

.gameboy__hacky-fix--left--green {
  background: #88d14b;
}

.gameboy__hacky-fix--left--yellow {
  background: #d4bb2a;
}

.gameboy__hacky-fix--right--red {
  background: #ff4f4c;
}

.gameboy__hacky-fix--right--purple {
  background: #492c6e;
}

.gameboy__hacky-fix--right--blue {
  background: #4a6dcc;
}

.gameboy__hacky-fix--right--green {
  background: #88d14b;
}

.gameboy__hacky-fix--right--yellow {
  background: #d4bb2a;
}
</style>
