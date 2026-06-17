<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
<div class="auth">
<RouterLink class="sin" to="/signin">Вход</RouterLink>
<RouterLink class="sup" to="/signup">Регистрация</RouterLink>
</div>


    
</template>

<style scoped> 
.auth{
  display: flex;
  justify-content: center;
  align-items: center;
  
}
@media (max-width: 800px) {
    .auth {
        margin-bottom: 10px;
    }
}

.auth a{
    padding: .65rem .9rem;
    border-radius: 5rem;
    margin: 0px 5px;

    text-decoration: none;
}
.sin {
    background-color: rgb(5, 145, 0);
    color:var(--light-color);
    &:hover{background-color: rgb(4, 119, 0);}

}

.sup{
    background-color: rgb(5, 145, 0);
    &:hover{background-color: rgb(4, 119, 0);}
}
</style>