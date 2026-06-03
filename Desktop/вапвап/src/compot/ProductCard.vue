<script setup>
defineProps({
    name: String,
    price: Number,
    Instock: Number
})

</script>

<template>
    <h2>{{ name }}</h2>
    <p>${{ price }}</p>
    <p>В а нале: {{ Instock }}</p>

    <button>buy</button>
</template>



<style>
button {
  border-radius: 4px;
}
</style>