<template>
  <div class="page-not-found">
    <img class="totoro-walking" src="../assets/totoro-walking.gif" alt="Totoro walking">
    <div class="text-information">
      <p class="text-404">404</p>
      <p class="text-page-not-found">Page Not Found</p>
      <p class="go-home">
        <router-link to="/">Click here to go home</router-link>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageNotFound"
}
</script>

<style scoped>
  .page-not-found {
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 200px);
    text-align: center;
    flex-flow: row;
  }
  .totoro-walking {
    height: 300px;
  }
  .text-404 {
    font-size: 5rem;
  }
  .text-page-not-found {
    font-size: 3rem;
  }
  .go-home {
    margin-top: 20px;
    font-size: 1rem;
  }
  .go-home a {
    text-decoration: none;
  }
  @media (max-width: 660px) {
    .page-not-found {
      flex-flow: column;
    }
  }
</style>
