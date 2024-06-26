<template>
    <div>
     <div id="map" style="height:90vh;"></div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import "leaflet/dist/leaflet.css"
  import * as L from 'leaflet';
  
  
  const initialMap = ref(null);
  
  onMounted(()=> {
      initialMap.value = L.map('map').setView([48.400002, 2.46667], 12);
      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 19, 
          attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      }).addTo(initialMap.value);
      L.marker([48.400002, 2.46667]).addTo(initialMap.value);
  });

  </script>
  
  <style scoped>
  
  </style> 