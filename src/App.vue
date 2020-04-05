<template>
  <div id="app">
    <Header />
    <ListGroup v-bind:items="groups" />
    <!-- <div class="container-title">
      <span class="title">
        Criar o Layout da tela de login - Front End
      </span>
    </div>
    <CardList v-bind:items="cards" /> -->
  </div>
</template>

<script>
// import CardList from "./components/Card";
import Header from "./components/Header";
import ListGroup from "./components/ListGroup";

import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
export default {
  name: "App",
  components: {
    Header,
    ListGroup
    // CardList
  },
  data: function() {
    return {
      cards: [
        { name: "Rafael", value: "2" },
        { name: "Caio", value: "3" },
        { name: "Gabriela", value: "8" },
        { name: "Ana", value: "7" },
        { name: "Kássio", value: "4" },
        { name: "Juliano", value: "2" }
      ],
      groups: [
        {
          name: "Xperts"
        },
        {
          name: "Admins"
        },
        {
          name: "Squadra Xperts"
        }
      ]
    };
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  width: 100vw;
  height: 100vh;
  background-color: #d6d6d6;
}

#app {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.container-title {
  width: 90vw;
  height: 10vh;
  background-color: white;
  margin: 10px;
  border: 1px solid white;
  box-shadow: 1px 1px 5px #aaaaaa;
  display: flex;
  justify-content: center;
  align-items: center;
}

.title {
  font-size: 16pt;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
}
</style>
