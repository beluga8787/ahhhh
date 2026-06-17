<script setup>
import { RouterLink } from 'vue-router';
defineProps({
        product: {
            type: Object,
            required: true
        }
})
</script>

<template>
    <article class="prod-card">
        <RouterLink class="prod-img" :to="`/products/${product.id}`"> 
            <img  :src="product.image" alt="">
        </RouterLink>
        <RouterLink class="prod-name" :to="`/products/${product.id}`">{{ product.name }}</RouterLink>
        <p class="prod-price">${{ product.price }}</p>
        <button class="prod-btn">+</button>
    </article>
</template>

<style scoped>
.prod-card {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    border-radius: 2rem;
    padding: 1rem;
    
    overflow: hidden;
    background-color: rgb(36, 36, 36);
    transition: box-sadow .2s, transform .2s;
    height: 230px;
    &:hover {
        box-shadow: 0 15px 15px black;
        transform: translateY(-1px);
    }

}
.prod-img {
  aspect-ratio: 3/4;
  width: 120px;
  height: 120px;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 1rem;
}
.prod-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}


.prod-name {
    display: flex;
    font-size: 2.5rem;
    text-decoration: none;
    
}
.prod-btn {
    
    width: 60px;
    height: 40px;
    justify-self: right;
    border-radius: 2rem;
    background-color: rgb(0, 24, 0);
    grid-column: 2;
    
    
}
.prod-price {
    font-size: 1.5rem;
    grid-column: 2;
}
</style>