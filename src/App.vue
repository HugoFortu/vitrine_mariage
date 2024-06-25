<template>
  <div class="min-h-screen bg-gray-100">
    <nav class="flex items-center justify-between flex-wrap p-6 bg-white shadow-md">
      <div class="flex items-center flex-shrink-0 text-xl font-semibold">
        <a class="text-blue-500 hover:text-blue-700" href="#">Mon Site Vitrine</a>
      </div>
      <div class="block lg:hidden">
        <button class="flex items-center px-3 py-2 border rounded text-blue-200 border-blue-400 hover:text-white hover:border-white">
          <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v15z"/></svg>
        </button>
      </div>
      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="text-sm lg:flex-grow">
          <a href="#accueil" class="block mt-4 lg:inline-block lg:mt-0 text-blue-500 hover:text-blue-700 mr-4">
            Accueil
          </a>
          <a href="#ou-et-quand" class="block mt-4 lg:inline-block lg:mt-0 text-blue-500 hover:text-blue-700 mr-4">
            Où et quand
          </a>
          <a href="#la-journee" class="block mt-4 lg:inline-block lg:mt-0 text-blue-500 hover:text-blue-700 mr-4">
            La journée
          </a>
          <a href="#ou-dormir" class="block mt-4 lg:inline-block lg:mt-0 text-blue-500 hover:text-blue-700 mr-4">
            Où dormir
          </a>
          <a href="#reponse" class="block mt-4 lg:inline-block lg:mt-0 text-blue-500 hover:text-blue-700 mr-4">
            Réponse
          </a>
          <a href="#contacts" class="block mt-4 lg:inline-block lg:mt-0 text-blue-500 hover:text-blue-700">
            Contacts
          </a>
        </div>
      </div>
    </nav>
    <div id="accueil" class="h-screen flex items-center justify-center bg-gray-100">
      <div class="text-center">
        <h2 class="text-3xl font-bold text-gray-800 mb-2">Accueil</h2>
        <p class="text-gray-600">Contenu de la section Accueil.</p>
      </div>
    </div>
    <div id="ou-et-quand" class="h-screen flex items-center justify-center bg-gray-100">
      <div class="text-center">
        <h2 class="text-3xl font-bold text-gray-800 mb-2">Où et quand</h2>
        <p class="text-gray-600">Contenu de la section Où et quand.</p>
      </div>
    </div>
    <div id="la-journee" class="h-screen flex items-center justify-center bg-gray-100">
      <div class="text-center">
        <h2 class="text-3xl font-bold text-gray-800 mb-2">La journée</h2>
        <p class="text-gray-600">Contenu de la section La journée.</p>
      </div>
    </div>
    <div id="ou-dormir" class="h-screen flex items-center justify-center bg-gray-100">
      <div class="text-center">
        <h2 class="text-3xl font-bold text-gray-800 mb-2">Où dormir</h2>
        <p class="text-gray-600">Contenu de la section Où dormir.</p>
      </div>
    </div>
    <div id="reponse" class="h-screen flex items-center justify-center bg-gray-100">
      <div class="text-center">
        <h2 class="text-3xl font-bold text-gray-800 mb-2">Réponse</h2>
        <p class="text-gray-600">Contenu de la section Réponse.</p>
      </div>
    </div>
    <div id="contacts" class="h-screen flex items-center justify-center bg-gray-100">
      <div class="text-center">
        <h2 class="text-3xl font-bold text-gray-800 mb-2">Contacts</h2>
        <p class="text-gray-600">Contenu de la section Contacts.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style scoped>
/* Ajoutez ici tout style personnalisé si nécessaire */
</style>