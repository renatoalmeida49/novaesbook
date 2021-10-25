<template>
  
  <div class="register">
    <ValidationObserver>
      <form class="register__form" @submit.prevent="submitNewAccount">
        <h1 class="register__title">Crie sua conta</h1>
        
        <ValidationProvider
          v-slot="{ errors }"
          rules="required|alpha"
        >
          <input
            type="text"
            placeholder="Digite seu nome completo"
            v-model="newAccountData.name"
          >
          <span class="error" v-if="errors[0]">{{ errors[0] }}</span>
        </ValidationProvider>

        <ValidationProvider
          v-slot="{ errors }"
          rules="required|email"
        >
          <input
            type="email"
            placeholder="Digite seu e-mail"
            v-model="newAccountData.email"
          >
          <span class="error" v-if="errors[0]">{{ errors[0] }}</span>
        </ValidationProvider>

        <ValidationProvider
          v-slot="{ errors }"
          rules="required"
        >
          <input
            type="password"
            placeholder="Digite sua senha"
            v-model="newAccountData.password"
          >
          <span class="error" v-if="errors[0]">{{ errors[0] }}</span>
        </ValidationProvider>

        <ValidationProvider
          v-slot="{ errors }"
          rules="required"
        >
          <input
            type="text"
            placeholder="Digite sua data de nascimento"
            v-model="newAccountData.birthdate"
          >
          <span class="error" v-if="errors[0]">{{ errors[0] }}</span>
        </ValidationProvider>

        <button class="btn-access">
          Criar conta
        </button>

        <router-link :to="{ name: 'Login' }" class="btn-new-access">
          Já tem conta? Faça login
        </router-link>
      </form>
    </ValidationObserver>
  </div>

</template>


<script>

import { ValidationObserver, ValidationProvider } from 'vee-validate'
import ValidateField from "@/mixins/validation.js"

export default {
  name: "Login",

  components: {
    ValidationObserver,
    ValidationProvider
  },

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

  mixins: [ValidateField],

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

  &__form {
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
      width: 100%;
      padding: 15px;
      border-radius: 8px;
      background: #EEE;
      border: none;
      outline: none;
    }

    .error {
      color: red;
      display: block;
      margin-bottom: 10px;
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