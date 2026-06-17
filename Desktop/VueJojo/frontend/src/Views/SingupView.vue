<script setup>
import { useRouter } from 'vue-router';
import { ref } from 'vue';

const login = ref('')
const password = ref('')
const router = useRouter()
const errors = ref({})



function reg() {
  errors.value = {}
  if (login.value.trim() == '') {
    errors.value.login = 'Логин кака'
  }
  else if (login.value.trim().length <= 4) {
    errors.value.login = 'У вас короткий!'
  }

  if (password.value < 8) {
    errors.value.password = 'Пароль должен быть больше 8 символов!'
  }
  if (Object.keys(errors.value).length > 0) return

  router.push('products')
}

</script>


<template>
  <div class="lol">
    <div class="lol2">
     
        <h2>Добро пожаловать!</h2>
        <p>Откройте для себя мир безграничных возможностей. Регистрация дает вам мгновенный доступ к эксклюзивным материалам и инструментам, которые изменят ваш подход к работе/жизни.</p>

   
  
    </div>
    <div class="lol1">
  
      <section>
        <h2>Регистрация</h2>

      
      
        <form @submit.prevent="reg" action="/api/users" method="POST">
          <input type="text" v-model="login" id="username" placeholder="Введите логин:">
          <p class="err" v-if="errors.login">{{ errors.login }}</p>
          <input type="password" v-model="password" id="password" placeholder="Введите пароль:">
          <p class="err" v-if="errors.password">{{ errors.password }}</p>
          <input type="submit" id="submit" >
        </form>
      </section>
   
    </div>

  </div>
   
  
</template>
<style scoped>
.err {
  font-size: 1.5rem;
  
}
.lol {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 2rem;
  justify-content: center;

  justify-self: center;
}

input {
  color: black;
}
section form {
  background-color: rgb(87, 87, 87);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 300px;
  margin: 1rem auto;
  padding: 1rem;
  border-radius: 2rem;
}


h2 {
  color: rgb(255, 255, 255);
  font-size: 3rem;
}
p {
  font-size: 1.6rem;
  margin-top: 20px;
  color: rgb(231, 231, 231);

}
section form input:not([type="submit"], [type="checkbox"], [type="radio"]) {
  border: 1px solid black;
  border-radius: .7rem;
  padding: .5rem;
  
  &:focus {
    border: 1px solid rgb(102, 0, 17);
  }
}
#submit {
  width: 80px;
  height: 40px;
  color: black;
  align-self: center;
  border-radius: .7rem;
}
.lol2 {
  display: block;
  grid-column: 1;
  background-color: rgb(105, 105, 105);
  border-radius: 2rem;
  padding: 2rem;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 60%);
  width: 600px;
  
}
.lol1 {
  grid-column: 2;
  background-color: rgb(105, 105, 105);
  border-radius: 2rem;
  padding: 2rem;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 60%);
  max-width: 700px;
}


  

@media(max-width: 1300px) {
  .lol2 {
    display: none;
  }
  section form {
    width: 300px;
  }
}

</style>
