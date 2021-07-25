<template>
  <div id="app">
    <router-view/>
    <LoadingScreen v-if="loading"></LoadingScreen>
  </div>
</template>

<script>

  import LoadingScreen from './components/LoadingScreen';
  import {mapState} from 'vuex';

  export default {
    computed: {
      ...mapState(['loading'])
    },
    components: {
      LoadingScreen
    },
    mounted() {
    }
  }
</script>
