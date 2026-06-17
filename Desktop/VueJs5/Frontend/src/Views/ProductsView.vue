<script setup>
  import ProductCard from '@/components/ProductCard.vue';
import { ref } from 'process';

  const products = ref([
    {id: 1, name: "Дилдо", price: 3400, image: '/favicon.ico'},
    {id: 2, name: "Д", price: 3400, image: '/favicon.ico'},
    {id: 3, name: "Дилдо", price: 3400, image: '/favicon.ico'},
    {id: 4, name: "Дилдо", price: 3400, image: '/favicon.ico'},
  ])

</script>


<template>
  <div class="products-view">
      <ProductCard v-for=""

  </div>
</template>
