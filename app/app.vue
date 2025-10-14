<template>
  <div class="homepage">
    <h1 class="name">Eliott TAN</h1>
  </div>
</template>

<script setup>
// Aucun script nécessaire pour l'instant
</script>

<style scoped>
.homepage {
  width: 100vw;
  height: 100vh;
  /* Image de fond */
  background-image: url('https://plus.unsplash.com/premium_photo-1759354802989-fe550925a411?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'); 
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

.name {
  color: white;
  font-size: 4rem;
  text-shadow: 2px 2px 10px rgba(0,0,0,0.7);
  text-align: center;
}
</style>