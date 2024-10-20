<template>
  <section id="hebergement">
    <div>
      <h1 class="little-title">Liste des hébergements à proximité</h1>
    </div>
    <p class="text-acco">Voici une liste de tous les hébergements à proximité de la salle, afin de pouvoir profiter de la fête jusqu'au bout de la nuit !</p>
    <div v-for="(accommodation, index) in accommodations" :key="accommodation.name">
      <p class="list-acco">
        <a target="_blank" :href="accommodation.link">{{index + 1}}. {{accommodation.name}}</a>
      </p>
    </div>
  </section>
</template>
    
<script setup>
  import { ref } from 'vue'
  const accommodations = 
    ref([{name: 'Le moulin du Mez', link: 'https://gensdeconfiance.com/fr/ui/post/vacations__rentals/80c125e9-2eba-41a3-8107-84a740f83bfd'},
        {name: "L'Echappée Belle", link: "https://www.gitedegroupe.fr/gite-groupe-Cc-4f60.html"},
        {name: "Le Gîte de groupe Le gué aux filles", link: "https://www.grandsgites.com/gite-50-gue-des-filles-365.htm"},
        {name: "Gite de l'atelier", link: "https://www.airbnb.fr/rooms/53806473?source_impression_id=p3_1722735156_P3xFztfJRaTLuLDd"},
        {name: "L'Allée du Quatre", link: "https://www.grandsgites.com/gite-77-allee-du-quatre-5139.htm"},
        {name: "Moulin de la concorde", link: "http://www.moulindelaconcorde.com/UnderConstruction.asp"},
        {name: "Au Domaine Des Roses", link: "https://domainedesroses.wordpress.com/"},
        {name: "La grange des blins", link: "https://www.lagrangedesblins.fr/"},
        {name: "Au chant du coq", link: "https://www.tourisme-gatinaisvaldeloing.fr/fr/fiche/6643881/gite-au-chant-du-coq/"},
        {name: "Les plumes de Vallombreuse", link: "https://www.laplumedevallombreuse.com/"},
        {name: "Les hébergements insolites du Danica", link: "https://www.ledanica.com/"},
        {name: "Hôtel de l’abbaye", link: "https://www.hotel-abbaye.fr/"}
      ]);
</script> 

