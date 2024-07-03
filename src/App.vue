<template>
  <Navbar />
  <vue3-flip-countdown
    deadline="2025-05-10 14:00:00"
    :flipAnimation="false"
    :labels="{days: 'Jours',hours: 'Heures',minutes: 'Minutes',seconds: 'Secondes',}"
  />
  <MapComponent />
  <ContactForm />

</template>

<script setup>
import MapComponent from './components/MapComponent.vue'
import Navbar from './components/NavbarComponent.vue'
import ContactForm from './components/ContactForm.vue'


</script>

<style scoped>

</style> 