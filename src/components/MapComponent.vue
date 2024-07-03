<template>
    <div>
     <div id="map" style="height:45vh; width:40vw;"></div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import "leaflet/dist/leaflet.css"
  import * as L from 'leaflet';
  
  
  const initialMap = ref(null);
  
  onMounted(()=> {
      initialMap.value = L.map('map').setView([48.4034789, 2.4668973], 12);
      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 19, 
          attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      }).addTo(initialMap.value);
      L.marker([48.4034789, 2.4668973]).addTo(initialMap.value);
      L.marker([48.139802, 2.803057]).addTo(initialMap.value);
  });

  </script>
  
  <style scoped>
  
  </style> 