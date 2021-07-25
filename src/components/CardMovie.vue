<template>
  <article class="card-movie">
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
        <p v-if="rt_score > 80">{{ rt_score }} %</p>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: 'CardMovie',
  props: ['id', 'title', 'director', 'release_date', 'rt_score', 'poster'],
}
</script>

<style scoped>
  .card-movie {
    display: grid;
    grid-template-rows: 300px 85px;
    box-shadow: 0 0 5px #ddd;
    border-radius: 4px;
    cursor: pointer;
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
    height: 40px;
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
    text-align: right;
    font-weight: bold;
  }
</style>
