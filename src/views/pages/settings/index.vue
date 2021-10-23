<template>

  <div class="settings-content">
    <div class="form">
      <label>Avatar:</label>
      <input type="file">

      <label>Cover:</label>
      <input type="file">

      <label>Nome completo:</label>
      <input type="text" v-model="userInfo.name">

      <label>Data de nascimento:</label>
      <input type="text" v-model="userInfo.birthdate">

      <label>E-mail:</label>
      <input type="text" v-model="userInfo.email">

      <label>Cidade:</label>
      <input type="text" v-model="userInfo.city">

      <label>Trabalho:</label>
      <input type="text" v-model="userInfo.work">

      <label>Nova senha:</label>
      <input type="text" disabled>

      <label>Confirmar senha:</label>
      <input type="text" disabled>

      <button @click="submitUpdate">Atualizar informações</button>
    </div>
  </div>

</template>


<script>

import { mapGetters } from 'vuex'
import { UPDATE } from '@/store/modules/user.module'

export default {
  name: "Settings",

  data() {
    return {
      userInfo: {}
    }
  },

  mounted() {
    this.$set(this, "userInfo", Object.assign({}, this.user))
  },

  computed: {
    ...mapGetters(['user'])
  },

  methods: {
    async submitUpdate() {
      await this.$store.dispatch(UPDATE, this.userInfo)
    }
  }
}

</script>


<style lang="scss">

.settings-content {
  margin: auto;
  text-align: start;

  .form {
    max-width: 400px;
    margin: auto;
    background-color: #FFF;
    border: 1px solid #c9cacc;
    border-radius: 5px;
    padding: 20px;
    margin-top: 50px;

    label {
      display: block;
      font-size: 13px;
      margin-bottom: 2px;
    }

    input {
      font-size: 15px;
      height: 40px;
      width: 100%;
      outline: 0;
      border: 0;
      background-color: #EEE;
      border-radius: 10px;
      padding: 15px;
      margin-bottom: 10px;
    }

    button {
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
      
      margin: auto;
      margin-bottom: 10px;
    }
  }
}

</style>