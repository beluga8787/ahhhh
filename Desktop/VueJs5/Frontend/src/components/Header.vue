<script setup >
import Auth from './Auth.vue'
import Logo from './Logo.vue'
import Navi from './Navi.vue'
</script>
<template>
  <header >
    <div class="header-content">
      <Logo />
      <Navi />
      <Auth />
    </div>
  </header>
</template>
<style>
.header-content{
    display: grid;
    grid-template-columns: repeat(3,1fr);
    padding: 1rem 4rem;
    gap: 1rem;
    background-color: rgb(66, 66, 66);
    margin: 1rem;
    border-radius: 2rem;
    align-items: center;
}

@media (max-width: 800px) {
    .header-content {
      grid-template-columns: 1fr;
      padding: 0;
    }
}
</style>