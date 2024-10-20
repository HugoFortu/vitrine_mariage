<template>
    <section id="plans">
      <div>
        <h1 class="little-title">Plans mairie et Orangerie</h1>
      </div>
      <div class="display-flex">
        <div class="div-map">
          <h4>Itinéraire mairie</h4>
          <div>
            <MapComponent
              adresse="Milly"
            >
            </MapComponent> 
          </div>
          <p>
            Adresse :  1 Place de la République, <br>
            91490 Milly-la-Forêt <br>
            Coordonnées GPS : 48.4034789, 2.4668973
          </p>
          <p class="gps">
            <a href="https://www.google.com/maps?q=48.40347893,2.4668973" target="_blank">
              Ouvrir dans Google Maps
            </a>
          </p>
        </div>
        <div class="div-map">
          <h4>Itinéraire Orangerie</h4>
          <div >
            <MapComponent
              adresse="Orangerie"
            >
            </MapComponent> 
          </div>
          <p>
            Adresse :  Moulin de Gros Lot, <br>
            77620 Bransles  <br>
            Coordonnées GPS : 48.1399421, 2.8036086
          </p>
          <p class="gps">
            <a href="https://www.google.com/maps?q=48.1399421,2.8036086" target="_blank">
              Ouvrir dans Google Maps
            </a>
          </p>
        </div>
      </div>
      <div class="background-orange"></div>
    </section>
  </template>
    
  <script setup>
    import MapComponent from './MapComponent.vue'
  </script>