<template>
  <div>
    <div class="row">
      <div
        class="flip-card-container"
        v-bind:class="{ isActive: isActive }"
        v-for="item in items"
        v-bind:key="item.name"
      >
        <div class="flip-card">
          <div class="flip-card-front">{{ item.name }}</div>
          <div class="flip-card-back">
            <div class="header-card">
              {{ item.value }}
            </div>
            <div class="middle-card">
              {{ item.value }}
            </div>
            <div class="bottom-card">
              <div class="circle"></div>
              <span class="text-rigth">
                {{ item.value }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <button type="button" class="btn btn-primary" @click="toggleState">
        {{ isActive ? "Esconder" : "Exibir" }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardList",
  props: ["items"],
  data: function() {
    return {
      isActive: false
    };
  },

  methods: {
    toggleState: function() {
      this.isActive = !this.isActive;
    }
  }
};
</script>

<style>
.row {
  display: flex;
  flex-wrap: wrap;
}

.flip-card-container {
  width: 250px;
  height: 390px;
  border-radius: 90%;
  perspective: 1000px;
  margin: 5px;
}

.flip-card {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 1s;
  transform-style: preserve-3d;
}

.isActive .flip-card {
  transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  backface-visibility: hidden;
  font-size: 2rem;
  border-radius: 15px;
  box-shadow: -1px 1px 4px rgba(0, 0, 0, 0.1);
}

.flip-card-front {
  background-color: #333;
  color: #fff;
  justify-content: center;
  align-items: center;
}

.flip-card-back {
  background-color: white;
  color: black;
  transform: rotateY(180deg);
}

.header-card {
  display: flex;
  flex-direction: column;
  flex: 0.5;
  align-items: flex-start;
  padding: 10px;
}

.middle-card {
  display: flex;
  flex: 2;
  justify-content: center;
  align-items: center;
  font-size: 5rem;
}

.bottom-card {
  display: flex;
  flex-direction: column;
  flex: 0.5;
  align-items: flex-end;
  padding: 10px;
}
</style>
