<template>
<div>
  <header>
      <div class="container">
          <img src="@/assets/novaesbook_logo.png" height="30" alt="Logo Novaesbook">
      </div>
  </header>

  <div class="loading" v-if="loading">
      <div class="loader"></div>
  </div>
  
    <div class="form-login">
        <input
            v-if="newAccountFlag"
            type="text"
            placeholder="Digite seu nome completo"
            v-model="newAccountData.name"
        >

        <input
            type="email"
            placeholder="Digite seu e-mail"
            v-model="credentials.email"
            :class="error"
        >

        <span class="error-message" :class="error">E-mail ou senha incorretos</span>

        <input
            type="password"
            placeholder="Digite sua senha"
            v-model="credentials.password"
            :class="error"
            @keyup.enter="submitLogin()"
        >

        <input
            v-if="newAccountFlag"
            type="text"
            placeholder="Digite sua data de nascimento"
            v-model="newAccountData.birthdate"
        >

        <button
            v-if="newAccountFlag"
            class="btn-access"
            @click="submitNewAccount"
        >
            Criar conta
        </button>

        <button
            v-else
            class="btn-access"
            @click="submitLogin"
        >
            Acessar
        </button>

        <button
            v-if="newAccountFlag"
            class="btn-new-access"
            @click="newAccount"
        >
            Já tem conta? Faça login
        </button>
        <button
            v-else
            class="btn-new-access"
            @click="newAccount"
        >
            Ainda não tem conta? Cadastre-se
        </button>
  </div>
</div>
</template>

<script>
import { mapActions } from 'vuex'
import axios from 'axios'

export default {
    name: "Login",
    data() {
        return {
            newAccountData: {
                name: '',
                birthdate: ''
            },
            credentials: {
                email: '',
                password: ''
            },
            newAccountFlag: false,
            showError: false,
            loading: false
        }
    },
    computed: {
        error() {
            return {'error' : this.showError}
        }
    },
    methods: {
        ...mapActions('user', ['login']),

        async submitLogin() {
            await this.login(this.credentials)
                
            if (localStorage.getItem('token') != null) {
                this.$router.push({ name: 'Home'})
            }

            this.showError = true
        },

        newAccount() {
            this.newAccountFlag = !this.newAccountFlag
        },

        submitNewAccount() {
            axios.post('http://localhost:4000/users/sign-up', {
                name: this.newAccountData.name,
                email: this.credentials.email,
                password: this.credentials.password,
                birthdate: this.newAccountData.birthdate
            })
                .then(() => {
                    this.submitLogin()
                })
                .catch(error => {
                    console.log("Erro!")
                    console.error(error)
                })
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

.loading {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    background-color: rgba(0, 0, 0, .5);
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    .loader {
        height: 150px;
        width: 150px;
        border: 8px solid white;
        border-radius: 50%;
        border-top: 8px solid #4a76a8;
        animation: spin 2s infinite;

        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
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

    .btn-new-access {
        text-decoration: none;
        color: #4a76a8;
        border: none;
        background: transparent;
        cursor: pointer;
    }
}
</style>