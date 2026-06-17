<script setup>
import { RouterView } from 'vue-router'
import Header from './components/Header.vue';
</script>

<template>
 
 <Header />
  
 <main class="">
  <div class="ddd">

    <div class="container">
      <RouterView />
    </div>
  </div>
    
  </main>


</template>

<style scoped>

.container {
  width: 90%;
  margin: 1rem auto;
  padding: 2rem;
  
}
.ddd{
  background-color: rgb(66, 66, 66);
  margin: 1rem;
  border-radius: 2rem;
  padding: 1rem;
}
</style>
