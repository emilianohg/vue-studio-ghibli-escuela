<template>
  <div class="container">

    <section class="section-company">
      <div>
        <h1 class="name-company">
          Producciones de Studio Ghibli
        </h1>
      </div>
        <img class="logo-company" src="../assets/studio-ghibli.png" alt="Studio Ghibli">

    </section>

    <section class="list-movies">
      <CardMovie v-for="movie in movies" :key="movie.id"
                 :poster="movie.poster"
                 :id="movie.id"
                 :title="movie.title"
                 :director="movie.director"
                 :rt_score="movie.rt_score"
                 :release_date="movie.release_date"
      ></CardMovie>
    </section>
  </div>
</template>

<script>

import { mapState, mapActions } from 'vuex'

import CardMovie from '../components/CardMovie'

export default {
  name: 'Home',
  computed: {
    ...mapState(['loading', 'movies'])
  },
  methods: {
    ...mapActions(['getMovies'])
  },
  components: {
    CardMovie
  },
  mounted() {
    this.getMovies()
  }
}
</script>

<style scoped>
  .section-company {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 50px 0;
  }
  .logo-company {
    height: 80px;
  }
  .list-movies {
    display: grid;
    grid-auto-rows: 385px;
    grid-template-columns: repeat(auto-fill, 200px);
    gap: 10px;
    justify-content: center;
  }
</style>
