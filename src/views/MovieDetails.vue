<template>
  <section class="container">
    <article class="movie">
      <div class="movie-poster">
        <img class="poster" :src="movie.poster" :alt="movie.title">
        <Rating :rate="movie.rt_score"></Rating>
      </div>
      <div>
        <div>
          <h1>{{ movie.title }}</h1>
          <h2>{{ movie.original_title }}</h2>
          <p>Director: {{ movie.director }}</p>
        </div>
        <div>
          <p>Lanzamiento: {{ movie.release_date }}</p>
          <p>Duración: {{ movie.running_time }} minutos.</p>
        </div>
        <div class="description">
          <p>
            {{ movie.description }}
          </p>
        </div>
      </div>
    </article>
  </section>
</template>

<script>
import {mapActions, mapState} from 'vuex'
import Rating from '../components/Rating'

export default {
  name: "MovieDetails",
  components: {Rating},
  computed: {
    ...mapState(['loading', 'movie'])
  },
  methods: {
    ...mapActions(['getMovie'])
  },
  mounted() {
    this.getMovie(this.$route.params.id)
  }
}
</script>

<style scoped>
  .movie {
    display: grid;
    grid-template-columns: 1fr 3fr;
    gap: 20px;
  }
  .movie h1 {
    font-size: 2.5rem;
  }
  .movie h2 {
    color: #555;
    font-size: 1.5rem;
  }
  .movie-poster {
    text-align: center;
  }
  .poster {
    max-width: 350px;
    border-radius: 5px;
    margin-bottom: 20px;
    box-shadow: 0 0 4px #b3b3b3;
  }
  .description {
    color: #555555;
  }
  @media (max-width: 660px) {
    .movie {
      grid-template-columns: 1fr;
    }
  }
</style>
