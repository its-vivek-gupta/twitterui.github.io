<template>
  <Navigation msg="Welcome to Your step by "/>
  <Home msg="Welcome to Your step by "/>
  <Notification />
</template>

<script>
import Navigation from './components/Navigation.vue'
import Home from './components/Home.vue'
import Notification from './components/Notification.vue'
export default {
  name: 'App',
  components: {
    Navigation,
    Home,
    Notification
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  
}
</style>
