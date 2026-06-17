<script setup>
import { RouterLink } from 'vue-router';
 

</script>

<template>
    <nav>
       <RouterLink to="/">Главная</RouterLink>
       <RouterLink to="/products">Продукты</RouterLink>
        <RouterLink to="/cart">Корзина</RouterLink>

    </nav>
</template>
<style scoped>
nav{
    display: flex;
    justify-content: center;
    
}
nav a{
    color: var(--muted-color);
    padding: .75rem .6rem;
    transition: .2s;
    text-decoration: none;
    border-radius: 1rem;
    margin: 0 10px;

    &:hover,&:active{
        background-color: var(--primary-color);
        color: var(--light-color);  
    }

}

</style>