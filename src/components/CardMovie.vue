<template>
  <article class="card-movie" @click="navigate">
    <div class="poster-movie">
      <img v-if="poster" :src="poster" :alt="title">
      <img class="poster-not-found" v-if="!poster" :alt="title" src="../assets/film-icon.png">
    </div>
    <div class="card-content">
      <div class="box-title-and-director">
        <div class="movie-title" v-bind:class="{ 'movie-liked':  rt_score >= 80, 'movie-dont-liked': rt_score < 80}">
          <h1>{{ title }}</h1>
        </div>
        <div class="movie-director">
          <h2>{{ director }}</h2>
        </div>
      </div>
      <div class="box-score">
        <span class="release_date">{{ release_date }}</span>
        <span class="score" v-if="rt_score > 80">{{ rt_score }} %</span>
      </div>
    </div>
  </article>
</template>

<script>

import router from "../router";

export default {
  name: 'CardMovie',
  props: ['id', 'title', 'director', 'release_date', 'rt_score', 'poster'],
  methods: {
    navigate: function() {
        router.push({ name: 'Movie', params: { id: this.id } })
    },
  }
}
</script>

<style scoped>
  .card-movie {
    display: grid;
    grid-template-rows: 300px 85px;
    box-shadow: 0 0 4px #b3b3b3;
    border-radius: 5px;
    cursor: pointer;
    overflow: hidden;
  }
  .poster-movie {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    background-color: #ddd;
  }
  .poster-movie img {
    display: block;
    max-height: 100%;
  }
  .poster-not-found {
    width: 40px;
    height: 40px;
  }
  .card-content {
    text-align: left;
    padding: 5px;
  }
  .box-title-and-director {
    height: 55px;
  }
  .movie-title {
    font-size: 0.9rem;
  }
  .movie-liked {
    color: #1B5E20;
  }
  .movie-dont-liked {
    color: #F57F17;
  }
  .movie-director {
    font-size: 0.5rem;
    color: #555;
  }
  .box-score {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    font-size: 1rem;
  }
  .release_date {
    font-size: .8rem;
  }
  .box-score .score {
    font-weight: bold;
  }
</style>
