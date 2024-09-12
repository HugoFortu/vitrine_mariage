<template>
  <section class="banner-section">
    <div class="display-flex">
      <div>
        <div class="container-banner">
          <p class="banner-sentence">Nous nous marions !</p>
          <h1 class="title text-center">Camille & Alexandre</h1>
          <vue3-flip-countdown
            deadline="2025-05-10 14:00:00"
            :flipAnimation="false"
            :labels="{days: 'jours',hours: 'heures',minutes: 'minutes',seconds: 'secondes',}"
            class="time-counter"
            labelColor="#CE7059"
            mainFlipBackgroundColor="#CE7059"
          />
        </div>
        <div class="date-container">
          <p class="date-text">
            Samedi, 10 mai 2025 <br>
            Mairie de Milly-la-Forêt
          </p>
          <button class="answer-btn">
            REPONDRE
          </button>
        </div>
      </div>
      <div>
        <img src="" alt="">
      </div>
    </div>
    <div class="orange-section"></div>
  </section>
</template>

<script setup>

</script>