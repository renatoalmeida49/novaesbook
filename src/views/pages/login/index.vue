<template>
<div>
  <header>
      <div class="container">
          <img src="@/assets/devsbook_logo.png" height="20" alt="Logo Devsbook">
      </div>
  </header>
  
  <div class="form-login">
      <input type="email" placeholder="Digite seu e-mail" v-model="email">

      <input type="password" placeholder="Digite sua senha" v-model="password">

      <button @click="login">Acessar</button>

      <a href="">Ainda não tem conta? Cadastre-se</a>
  </div>
</div>
</template>

<script>
export default {
    name: "Login",
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        login() {
            console.log('Email: ', this.email)
        }
    }
}
</script>

<style lang="scss" scoped>
header {
    background-color:#4a76a8;
    height: 45px;
    box-shadow: 0px 0px 4px #333;
    position: relative;
    z-index: 99;
    margin-bottom: 20px;

    .container {
        display: flex;
        height: inherit;
        justify-content: center;
        align-items: center;
    }
}

.form-login {
    background: #fff;
    display: flex;
    flex-direction: column;
    max-width: 375px;
    margin: 0 auto;
    padding: 15px;
    border: 1px solid #c9cacc;

    input {
        font-size: 16px;
        margin-bottom: 10px;
        padding: 15px;
        border-radius: 8px;
        background: #EEE;
        border: none;
        outline: none;
    }

    button {
        border: 0;
        padding: 10px 20px;
        background-color: #4a76a8;
        border-radius: 10px;
        color: #FFF;
        font-size: 15px;
        margin-bottom: 10px;
        cursor: pointer;
        box-shadow: 0px 0px 3px #999;
        width: 100%;
        max-width: 170px;
        margin: auto;
        margin-bottom: 10px;
    }

    a {
        text-decoration: none;
        color: #4a76a8;
    }
}
</style>