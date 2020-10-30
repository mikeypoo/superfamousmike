<template>
  <div class="modal-wrapper">
    <div class="select-color">
      <div class="select-color__label">SELECT</div>
      <div class="select-color__button" @click="toggleShowModal()"/>
    </div>
    <div class="select-color__modal" v-if="showModal">
      <div class="select-color__modal__label">Choose Color</div>
      <div class="select-color__modal__pip-container">
        <div class="select-color__modal__item" v-for="pip in pips" :key="pip.id">
          <div
            class="select-color__modal__pip"
            :class="`select-color__modal__pip--${pip.color}`"
            @click="selectPip(pip.color)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SelectColor",
  data: () => {
    return {
      showModal: false,
      pips: [
        { id: 1, color: "red" },
        { id: 2, color: "purple" },
        { id: 3, color: "blue" },
        { id: 4, color: "green" },
        { id: 5, color: "yellow" },
      ],
    };
  },
  methods: {
    toggleShowModal: function() {
      this.showModal = !this.showModal;
    },
    selectPip: function(colorName) {
      document.getElementById(
        "gameboy"
      ).className = `gameboy gameboy--${colorName}`;

      document.getElementById(
        "hacky-left"
      ).className = `gameboy__hacky-fix--left gameboy__hacky-fix--left--${colorName}`;

      document.getElementById(
        "hacky-right"
      ).className = `gameboy__hacky-fix--right gameboy__hacky-fix--right--${colorName}`;

      this.showModal = false;
    },
  },
};
</script>

<style scoped>
.select-color {
  position: absolute;
  bottom: 5%;
  left: 50%;
  transform: translateX(-50%);
}

.select-color__label {
  color: lightgrey;
  margin-bottom: 8px;
  font-size: 12px;
}

.select-color__button {
  height: 16px;
  background: lightgrey;
  border-radius: 10px;
  width: 60%;
  margin: auto;
  cursor: pointer;
}

.select-color__modal {
  position: absolute;
  height: 120px;
  width: 90%;
  left: 5%;
  background: var(--super-famous-white);
  top: 60%;
  border-radius: 12px;
  box-shadow: 10px 10px rgba(0, 0, 0, 0.5);
  color: var(--super-famous-black);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.select-color__modal__label {
  color: var(--super-famous-black);
  font-size: 12px;
  margin-bottom: 16px;
}

.select-color__modal__pip-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
}

.select-color__modal__pip {
  border-radius: 50%;
  height: 32px;
  width: 32px;
  cursor: pointer;
}

.select-color__modal__pip--red {
  background: #ff4f4c;
}

.select-color__modal__pip--purple {
  background: #492c6e;
}

.select-color__modal__pip--blue {
  background: #4a6dcc;
}

.select-color__modal__pip--green {
  background: #88d14b;
}

.select-color__modal__pip--yellow {
  background: #d4bb2a;
}
</style>
