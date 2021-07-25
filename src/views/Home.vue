<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
  </div>
</template>

<script>

import { mapState, mapActions } from 'vuex'

export default {
  name: 'Home',
  computed: {
    ...mapState(['loading', 'movies'])
  },
  methods: {
    ...mapActions(['getMovies'])
  },
  components: {
  },
  mounted() {
    this.getMovies()
  }
}
</script>
