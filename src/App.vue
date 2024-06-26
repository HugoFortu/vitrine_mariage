<template>
  <Navbar />
  <vue3-flip-countdown
    deadline="2025-05-10 14:00:00"
    :flipAnimation="false"
    :labels="{days: 'Jours',hours: 'Heures',minutes: 'Minutes',seconds: 'Secondes',}"
  />
  <MapComponent />


</template>

<script>
import MapComponent from './components/Map.vue'
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    MapComponent,
  },  
}

</script>

<style scoped>

</style> 