/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.html', // Chemin vers vos fichiers HTML
    './src/**/*.vue', // Chemin vers vos composants Vue
    './src/**/*.jsx', // Chemin vers vos composants React (si vous en utilisez)
    './index.html', // Fichier HTML principal
    // Ajoutez ici d'autres chemins si nécessaire
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};