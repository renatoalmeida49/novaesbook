<template>
  
  <div class="register">
    <form class="form-login" @submit.prevent="submitNewAccount">
      <h1 class="register__title">Crie sua conta</h1>

      <input
        type="text"
        placeholder="Digite seu nome completo"
        v-model="newAccountData.name"
      >

      <input
        type="email"
        placeholder="Digite seu e-mail"
        v-model="newAccountData.email"
      >

      <input
        type="password"
        placeholder="Digite sua senha"
        v-model="newAccountData.password"
      >

      <input
        type="text"
        placeholder="Digite sua data de nascimento"
        v-model="newAccountData.birthdate"
      >

      <button class="btn-access">
        Criar conta
      </button>

      <router-link :to="{ name: 'Login' }" class="btn-new-access">
        Já tem conta? Faça login
      </router-link>
    </form>
  </div>

</template>


<script>

export default {
  name: "Login",

  data() {
    return {
      newAccountData: {
        name: '',
        birthdate: '',
        email: '',
        password: ''
      },
      showError: false,
    }
  },

  computed: {
    error() {
      return {'error' : this.showError}
    }
  },

  methods: {
    submitNewAccount() {
      this.$api.post('/users/sign-up', {
        name: this.newAccountData.name,
        email: this.credentials.email,
        password: this.credentials.password,
        birthdate: this.newAccountData.birthdate
      })
        .then(() => {
          this.$router.push({ name: 'Login' })
        })
        .catch(error => {
          console.log("Erro!")
          console.error(error)
        })
    }
  }
}

</script>


<style lang="scss">

.register {
  &__title {
    font-family: Arial, Helvetica, sans-serif;
    margin-bottom: 24px;
    font-size: 24px;
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

      &.error {
        border: 1px solid red;
      }
    }

    .error-message {
      margin-bottom: 10px;
      display: none;
      color: red;

      &.error {
        display: block;
      }
    }

    .btn-access {
      border: 0;
      padding: 10px 20px;
      background-color: $primary-color;
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

    .btn-new-access {
      text-decoration: none;
      color: $primary-color;
      border: none;
      background: transparent;
      cursor: pointer;
    }
  }
}

</style>