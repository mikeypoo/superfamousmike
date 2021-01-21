<template>
  <div>
    <h1 class="header">Name That Country Tune</h1>
    <div class="bonus">
      <div @click="showModal(question)" :class="computeClass(question)" v-for="question in questions" :key="question.key">
        {{question.text}}
      </div>
      <div class="modal" v-if="showingModal">
        Change Color:
        <div class="modalitem" @click="changeItemColor(activeItem, 'green')">Green</div>
        <div class="modalitem" @click="changeItemColor(activeItem, 'red')">Red</div>
        <div class="modalitem" @click="changeItemColor(activeItem, 'yellow')">Yellow</div>
        <div class="modalitem" @click="changeItemColor(activeItem, 'wrong')">Incorrect</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data: () => {
    return {
      showingModal: false,
      activeItem: null,
      questions: [
        {
          key: 1,
          text: "1",
          color: "blue",
        },
        {
          key: 2,
          text: "2",
          color: "blue",
        },
        {
          key: 3,
          text: "3",
          color: "blue",
        },
        {
          key: 4,
          text: "4",
          color: "blue",
        },
        {
          key: 5,
          text: "5",
          color: "blue",
        },
        {
          key: 6,
          text: "6",
          color: "blue",
        },
        {
          key: 7,
          text: "7",
          color: "blue",
        },
        {
          key: 8,
          text: "8",
          color: "blue",
        },
        {
          key: 9,
          text: "9",
          color: "blue",
        },
        {
          key: 10,
          text: "10",
          color: "blue",
        },
        {
          key: 11,
          text: "11",
          color: "blue",
        },
        {
          key: 12,
          text: "12",
          color: "blue",
        },
        {
          key: 13,
          text: "13",
          color: "blue",
        },
        {
          key: 14,
          text: "14",
          color: "blue",
        },
        {
          key: 15,
          text: "15",
          color: "blue",
        },
        {
          key: 16,
          text: "16",
          color: "blue",
        },
      ],
    };
  },
  methods: {
    computeClass: function(item) {
      return `griditem griditem--${item.color}`;
    },
    showModal: function(item) {
      this.activeItem = item;
      this.showingModal = !this.showingModal;
    },
    changeItemColor: function(item, color) {
      item.color = color;
      item.text = "";
      this.showingModal = false;
    },
  },
};
</script>

<style>
@import "./global.css";
body {
  color: var(--super-famous-white);
  background-color: var(--super-famous-black);
  font-family: var(--super-famous-font);
  margin: 0;
}
</style>

<style scoped>
.bonus {
  background: var(--super-famous-black);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 32px;
}

.griditem {
  color: white;
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
  border: 1px solid white;
  cursor: pointer;
  font-size: 60px;
}

.griditem--blue {
  background: darkblue;
}

.griditem--green {
  background: darkgreen;
}

.griditem--red {
  background: darkred;
}

.griditem--yellow {
  background: yellow;
  color: black;
}

.griditem--wrong {
  background: grey;
  color: black;
}

.modal {
  position: absolute;
  top: 200px;
  left: 50%;
  height: 300px;
  width: 500px;
  background: white;
  color: black;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 20px;
  border-radius: 5px;
}

.modalitem {
  height: 50px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin: 10px;
  cursor: pointer;
}

.header {
  text-align: center;
}
</style>
