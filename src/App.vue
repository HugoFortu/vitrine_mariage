<template>
  <Navbar />
  <vue3-flip-countdown />
  <Map />


</template>

<script>
import Map from './components/Map.vue'
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Map,
  },  
}

</script>

<style scoped>

</style> 