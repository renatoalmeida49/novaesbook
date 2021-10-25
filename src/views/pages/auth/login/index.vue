<template>
  
  <div class="login">
    <ValidationObserver>
      <form class="login__form" @submit.prevent="submitLogin">
        <h1 class="login__title">Acesse sua conta</h1>

        <ValidationProvider
          v-slot="{ errors }"
          rules="required|email"
        >
          <input
            type="email"
            placeholder="Digite seu e-mail"
            v-model="credentials.email"
            :class="error"
          >
          <span class="error">{{ errors[0] }}</span>
        </ValidationProvider>


        <ValidationProvider
          v-slot="{ errors }"
          rules="required"
        >
          <input
            type="password"
            placeholder="Digite sua senha"
            v-model="credentials.password"
            :class="error"
          >
          <span class="error">{{ errors[0] }}</span>
        </ValidationProvider>

        <button class="btn-access">
          Acessar
        </button>

        <router-link :to="{ name: 'Register' }" class="btn-new-access">
          Ainda não tem conta? Cadastre-se
        </router-link>
      </form>
    </ValidationObserver>
  </div>

</template>


<script>

import { LOGIN } from '@/store/modules/user.module'
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
      credentials: {
        email: '',
        password: ''
      },
    }
  },

  mixins: [ValidateField],

  computed: {
    error() {
      return {'error' : this.showError}
    }
  },

  methods: {
    async submitLogin() {
      this.$store.dispatch(LOGIN, this.credentials)
        .then(() => {
          this.$router.push({ name: 'Home'})
        })
    },
  }
}
</script>


<style lang="scss">

.login {
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
      width: 100%;
      margin-bottom: 10px;
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

    .error-message {
      margin-bottom: 10px;
      display: none;
      color: red;
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