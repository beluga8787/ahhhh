<script setup>
import { ref, computed } from 'vue';
import ProductCard from './compot/ProductCard.vue';

const firstName = ref('')
const lastName = ref('')
const fullName = computed(() => firstName.value + ' ' + lastName.value)
const jojo = computed(() => {if(firstName.value == '') return jojo.value = "нету"; else { return jojo.value = "есть"}})
const jojo1 = computed(() => {if(lastName.value == '') return jojo1.value = "нету"; else { return jojo1.value = "есть"}})


const search = ref('')

const filteredProducts = computed(() => {
  return products.value.filter(tom => {
    return tom.name.toLowerCase().includes(search.value.toLowerCase())
  })
})



const products = ref([
  {id: 1, name: "marat", price: -1, Instock:1},
  {id: 2, name: "shaman", price: -14, Instock:12},
  {id: 3, name: "Tami4ok", price: 999999, Instock:0},
  {id: 4, name: "dildo", price: 16, Instock:67},
])
</script>

<template>
  <div class="prprr">
    <input type="text" placeholder="Введи имя жи есть:" v-model="firstName">
    <input type="text" placeholder="Введи фамылыю жи есть:" v-model="lastName">

    <p>Имя жи {{jojo}}: {{ firstName }}</p>
    <p>Фамилия жи {{jojo1}}: {{ lastName }}</p>
    <p>полное имя жи: {{ fullName }}</p>

    <input type="text" placeholder="Введите Ахх:" v-model="search">

  </div>

  
  
  <div class="prpr">
    <div class="card" v-for="popa in filteredProducts" :key="popa.id">
      <ProductCard :name="popa.name" :price="popa.price" :Instock="popa.Instock" />
    </div>

  </div>
  

  

</template>

<style scoped>
h2 {
  font-size: 3rem;
  text-align: center;
  font-weight: bold;
}
p {
  font-size: 1.5rem;
}


.prpr {
  margin: 10px;
  border-radius: 20px;
  display: flex;
  background-color: rgb(226, 226, 226);
}
.prprr {
  margin: 10px;
  border-radius: 20px;
  padding: 10px;
  background-color: rgb(226, 226, 226);
}
.card {
  border-radius: 20px;
  margin: 20px 20px ;
  justify-content: center;
  align-items: center;
  padding: 10px;
  width: 150px;
  height: 230px;
  background-color: rgb(255, 255, 255);
  border-color: rgb(107, 107, 107);
  border: 2px solid black;
}
.not {
  opacity: 70%;
}
.card-name {
  font-size: 2rem;
  justify-self: center;
}
</style>

