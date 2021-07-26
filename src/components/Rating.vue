<template>
  <div class="rating-container">
    <div class="stars-container">
      <img class="star" v-for="(number, index) in stars" :key="index" src="../assets/rating-star.png" :alt="number">
      <img class="star middle-star" v-if="middle_star" src="../assets/rating-middle-star.png" alt="C">
    </div>
    <div class="score" v-bind:class="{ 'movie-liked':  rate >= 80, 'movie-dont-liked': rate < 80}">
      <span>{{ rate }} %</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Rating",
  props: ['rate'],
  computed: {
    stars: function () {
      if (this.rate === null || this.rate === undefined) {
        return []
      }
      return [...Array(Math.floor(this.rate/20)).keys()]
    },
    middle_star: function () {
      return this.rate/20 - Math.floor(this.rate/20) >= 0.5;
    }
  },
}
</script>

<style scoped>
.rating-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  font-weight: bold;
}
.stars-container {
  display: inline-flex;
}
.movie-liked {
  color: var(--green);
}
.movie-dont-liked {
  color: var(--red);
}
</style>
