<template>
  <div class="signup-view">
    <section>
      <form action="/singun" method="POST">
        <input type="email" name="email" id="email">
        <input type="text" name="username" id="username">
        <input type="password" name="password" id="password">
        <input type="sumbut" id="sumbut">
      </form>
    </section>
   
  </div>
</template>
<style scoped>
section form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

section form input:not([type="sumbut"], [type="checkbox"], [type="radio"]) {
  border: 1px solid black;
  border-radius: 2rem;
  padding: .5rem;
  width: 90%;
  margin: 0 auto;
  &:focus {
    border: 1px solid rgb(102, 0, 17);
  }
}

</style>
