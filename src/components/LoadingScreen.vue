<template>
  <div class="screen-loading">
    <img class="image-loading" src="../assets/totoro.gif" alt="totoro">
    <div class="text-loading">
      <p>LOADING <span>...</span></p>
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "LoadingScreen",
  computed: {
    ...mapState(['loading'])
  }
}
</script>

<style scoped>
  .screen-loading {
    position: fixed;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    top: 0;
    flex-flow: column;
    background-color: #fff;
  }
  .image-loading {
    border-radius: 100%;
    height: 200px;
  }
  .text-loading {
    font-weight: bold;
  }
</style>
