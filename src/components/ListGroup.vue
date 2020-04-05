<template>
  <div class="list-container">
    <div class="item" v-for="item in items" v-bind:key="item.name">
      {{ item.name }}
      <button class="btn btn-primary">
        Entrar
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListGroup",
  props: ["items"]
};
</script>
<style>
.item {
  width: 95vw;
  height: 10vh;
  display: flex;
  flex-direction: column;
  background-color: white;
  margin: 10px;
  padding: 10px;
  border-radius: 12px;
  box-shadow: -1px 1px 4px rgba(0, 0, 0, 0.1);
  justify-content: center;
  align-items: center;
}
</style>
