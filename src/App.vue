<template>
  <div id="app">
    <Navbar></Navbar>
    <router-view/>
    <LoadingScreen></LoadingScreen>
  </div>
</template>

<script>

  import LoadingScreen from './components/LoadingScreen';
  import Navbar from './components/Navbar';

  export default {
    components: {
      Navbar,
      LoadingScreen
    },
    mounted() {
    }
  }
</script>
