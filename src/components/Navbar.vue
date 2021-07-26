<template>
  <nav class="container section-company">
    <div>
      <img v-if="$route.name !== 'Home'"
           class="btn-back"
           src="../assets/left-chevron.png"
           alt="<"
           @click="back"
      >
    </div>
    <router-link to="/">
      <img class="logo-company" src="../assets/studio-ghibli.png" alt="Studio Ghibli">
    </router-link>
  </nav>
</template>

<script>
import router from "../router";

export default {
  name: "Navbar",
  methods: {
    back: function() {
      router.back()
    },
  },
  mounted() {
    this.$route.name
  }
}
</script>

<style scoped>
.section-company {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
}
.logo-company {
  height: 80px;
}
.btn-back {
  cursor: pointer;
}
</style>
