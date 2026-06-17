<script setup>
  import ProductCard from '@/components/ProductCard.vue';
  import { ref } from 'vue'

  const products = ref([
    {id: 1, name: "Дилдо", price: 3400, image: '/favicon.ico'},
    {id: 2, name: "Принглс с губками", price: 400, image: '/pring.jpg'},
    {id: 3, name: "Секс-кукла", price: 13800, image: '/marat.png'},
    {id: 4, name: "Кляп", price: 300, image: '/kap.jpg'},
  ])

</script>


<template>
  <div class="products-view">
      <ProductCard v-for="prod in products" :key="prod.id" :product="prod" />


  </div>
</template>

<style scoped>
.products-view {
  display: grid;
  grid-template-columns: repeat(4,1fr);
  gap: 1.5rem;
  padding: 1rem;
}

</style>