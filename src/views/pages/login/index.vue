<template>
<div>
  <header>
      <div class="container">
          <img src="@/assets/devsbook_logo.png" height="20" alt="Logo Devsbook">
      </div>
  </header>
  
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
        >

        <input
            type="password"
            placeholder="Digite sua senha"
            v-model="credentials.password"
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
            newAccountFlag: false
        }
    },
    methods: {
        ...mapActions('user', ['login']),

        async submitLogin() {
            await this.login(this.credentials)
                
            if (localStorage.getItem('token') != null) {
                this.$router.push({ name: 'Home'})
            }
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