<template>
  <div>
    <h2 class="header">🎵 Name That Country Tune 🎵</h2>
    <div class="control">
      <div class="control-players">
        <div @click="assignColor(color)" class="control-option" v-for="(name, color) in players" :key="color">
          <div :class="circleClass(color)" />
          <div class="control-name">
            {{name}}
          </div>
        </div>
      </div>
      <div @click="assignColor('wrong')" class="control-option">
        <div class="control-wrong-indicator" />
        <div class="control-name">
          Incorrect
        </div>
      </div>
    </div>
    <div class="bonus">
      <div @click="setActiveItem(question)" :class="computeClass(question)" v-for="question in questions" :key="question.key">
        {{question.filledIn ? '' : question.text}}
      </div>
    </div>

    <div v-if="showMenu" class="modal">
      Input the labels for the questions separated by commas.
      <textarea class="modalinput modalinput--area" rows="4" placeholder="Hits of the 80's, Male Artists, Current Hits..." v-model="editingConfig.config" />
      Input the names of the contestants separated by commas.
      <input class="modalinput" type="text" placeholder="Red, Green, Yellow" v-model="editingConfig.players">
      <button class="modalbutton" @click="submitEditingConfig()">Update Game</button>
      <div class="modalhint">
        (hit the ESC key to close this menu)
      </div>
    </div>
  </div>
</template>

<script>
import { defaultConfig } from "./config";

const games = JSON.parse(localStorage.getItem("NTCTGames"));
const activeIdx = 0;
const activeGame = games && games[activeIdx];

let config = null;
let players = null;

if (activeGame) {
  config = games[activeIdx].config;
  players = games[activeIdx].players;
} else {
  config = defaultConfig.config;
  players = defaultConfig.players;
}

export default {
  name: "app",
  data: () => {
    return {
      activeItem: null,
      showMenu: false,
      editingConfig: { config: null, players: null },
      questions: [
        {
          key: 1,
          text: config[0],
          color: "blue",
        },
        {
          key: 2,
          text: config[1],
          color: "blue",
        },
        {
          key: 3,
          text: config[2],
          color: "blue",
        },
        {
          key: 4,
          text: config[3],
          color: "blue",
        },
        {
          key: 5,
          text: config[4],
          color: "blue",
        },
        {
          key: 6,
          text: config[5],
          color: "blue",
        },
        {
          key: 7,
          text: config[6],
          color: "blue",
        },
        {
          key: 8,
          text: config[7],
          color: "blue",
        },
        {
          key: 9,
          text: config[8],
          color: "blue",
        },
        {
          key: 10,
          text: config[9],
          color: "blue",
        },
        {
          key: 11,
          text: config[10],
          color: "blue",
        },
        {
          key: 12,
          text: config[11],
          color: "blue",
        },
        {
          key: 13,
          text: config[12],
          color: "blue",
        },
        {
          key: 14,
          text: config[13],
          color: "blue",
        },
        {
          key: 15,
          text: config[14],
          color: "blue",
        },
        {
          key: 16,
          text: config[15],
          color: "blue",
        },
      ],
      players,
    };
  },
  created() {
    addEventListener("keydown", (event) => {
      if (event.key === "e") {
        this.showMenu = true;
      } else if (event.key === "Escape") {
        this.showMenu = false;
      }
    });
  },
  methods: {
    circleClass: function(color) {
      return `control-circle control-circle--${color}`;
    },
    computeClass: function(item) {
      if (this.activeItem === item) {
        return `griditem griditem--active griditem--${item.color}`;
      } else {
        return `griditem griditem--${item.color}`;
      }
    },
    setActiveItem: function(item) {
      if (item.filledIn) {
        item.filledIn = false;
        item.color = "blue";
        this.activeItem = item;
        return null;
      }

      if (item.color === "blue") {
        if (this.activeItem === null) {
          this.activeItem = item;
        } else if (this.activeItem !== item) {
          this.activeItem = item;
        } else {
          this.activeItem = null;
        }
      }
    },
    assignColor: function(color) {
      this.activeItem.color = color;
      this.activeItem.filledIn = true;
      this.activeItem = null;
    },
    submitEditingConfig: function() {
      const newConfigString = this.editingConfig.config;
      const newPlayersString = this.editingConfig.players;

      if (!(newConfigString && newPlayersString)) {
        return null;
      }

      const newConfigList = newConfigString.split(",").map((str) => str.trim());
      const newPlayersList = newPlayersString
        .split(",")
        .map((str) => str.trim());

      if (newConfigList.length !== 16) {
        alert("you need to specify 16 labels for the questions");
        return null;
      } else if (newPlayersList.length !== 3) {
        alert("you need to provide exactly 3 player names");
        return null;
      }

      const newConfig = {
        config: newConfigList,
        players: {
          red: newPlayersList[0],
          green: newPlayersList[1],
          yellow: newPlayersList[2],
        },
      };

      localStorage.setItem("NTCTGames", JSON.stringify([newConfig]));
      this.showMenu = false;
      window.location.reload();
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
  background: var(--super-famous-white);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
  width: 80%;
  margin: auto;
  max-width: 1000px;
}

.griditem {
  color: white;
  width: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 130px;
  border: 1px solid white;
  cursor: pointer;
  font-size: 18px;
  text-transform: uppercase;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
}

.griditem--blue {
  background: darkblue;
}

.griditem--green {
  background: darkgreen;
}

.griditem--active {
  opacity: 0.5;
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
  width: 500px;
  background: white;
  color: black;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 5px;
}

.modalinput {
  display: block;
  width: 100%;
  margin-bottom: 20px;
}

.modalinput--area {
  height: 100px;
}

.modalbutton {
  background: black;
  color: white;
  padding: 12px 40px;
  text-transform: uppercase;
  margin: auto;
}

.modalhint {
  color: darkgrey;
  font-size: 14px;
  margin: auto;
  padding-top: 12px;
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

.control {
  display: flex;
  justify-content: space-between;
  width: 80%;
  background: black;
  padding: 20px;
  margin: auto;
  margin-top: 20px;
  max-width: 1000px;
}

.control-option {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.control-players {
  display: flex;
  width: 380px;
  justify-content: space-between;
}

.control-circle {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  border: 1px solid darkblue;
}

.control-name {
  color: white;
  text-transform: uppercase;
  margin-left: 8px;
  font-size: 20px;
}

.control-circle--red {
  background: darkred;
}

.control-circle--green {
  background: darkgreen;
}

.control-circle--yellow {
  background: yellow;
}

.control-wrong-indicator {
  width: 120px;
  height: 40px;
  background: grey;
  border: 1px solid white;
}
</style>
