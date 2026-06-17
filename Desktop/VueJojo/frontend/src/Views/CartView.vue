<script setup>
  import CartCard from '@/components/CartCard.vue';
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
  <div class="cart">
    <h2>Корзина:</h2>
    <CartCard v-for="pp in products" :key="pp.id" :product="pp"/>
  </div>
</template>


<style scoped>

h2 {
  font-size: 4rem;
}
.cart {
  background-color: rgb(97, 97, 97);
  padding: 2rem;
  border-radius: 2rem;
}
</style>