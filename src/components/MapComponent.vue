<template>
    <div>
        <div :id="'map-' + props.adresse" style="height:45vh; width:40vw;"></div>
    </div>
</template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import "leaflet/dist/leaflet.css"
  import * as L from 'leaflet';
  
  const props = defineProps(['adresse'])
  const initialMap = ref(null);
  let coordonates = [];
  
 if (props.adresse === 'Milly') {
     coordonates = [48.4034789, 2.4668973]
} else if (props.adresse === 'Orangerie') {
     coordonates = [48.1399421,2.8036086]
}

  
  onMounted(()=> {
      initialMap.value = L.map('map-' + props.adresse).setView(coordonates, 14);
      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 19, 
          attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      }).addTo(initialMap.value);
      L.marker(coordonates).addTo(initialMap.value);
  });

  </script>
  
  <style scoped>
  
  </style> 