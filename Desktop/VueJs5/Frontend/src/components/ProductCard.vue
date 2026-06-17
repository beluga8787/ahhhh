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
    border-radius: 2rem;
    overflow: hidden;
    background-color: rgb(36, 36, 36);
    transition: box-sadow .2s, transform .2s;
    &:hover {
        box-shadow: 0 15px 15px black;
        transform: translateY(-1px);
    }

}
.prod-image {
    aspect-ratio: 3/4;
    overflow: hidden;
    border-radius: 1rem;
}
.prod-image img {
    object-fit: cover;
    width: 100%;
    height: 100%;
}
</style>