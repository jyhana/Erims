<template>
  <div id="app">
<!--    <router-view></router-view>-->
    <Onemap />
  </div>
</template>

<script>
// import Login from './views/Login.vue';
import Onemap from './views/Onemap.vue';
export default {
  name: "App",
  components: { Onemap }
}
</script>

<style>
#app {
  /* position: absolute; */
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
