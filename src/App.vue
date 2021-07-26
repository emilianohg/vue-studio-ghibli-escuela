<template>
  <div id="app">
    <Navbar></Navbar>
    <router-view/>
    <LoadingScreen v-if="loading"></LoadingScreen>
  </div>
</template>

<script>

  import LoadingScreen from './components/LoadingScreen';
  import {mapState} from 'vuex';
  import Navbar from './components/Navbar';

  export default {
    computed: {
      ...mapState(['loading'])
    },
    components: {
      Navbar,
      LoadingScreen
    },
    mounted() {
    }
  }
</script>
