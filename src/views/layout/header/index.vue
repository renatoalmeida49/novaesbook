<template>

  <header class="header-index">
    <div class="container">
      <div class="logo">
        <router-link :to="{ name: 'Home'}">
          <img src="@/assets/novaesbook_logo.png" alt="Logo">
        </router-link>
      </div>

      <div class="head-side">
        <div class="left">
          <input type="text" placeholder="Pesquisar" class="search-input">
        </div>

        <div class="right">
          <router-link :to="{ name: 'Profile'}">
            <p class="user-name">{{ user.name }}</p>
          </router-link>
          <img :src="getImage" width="24" height="24" alt="Avatar">
          <button class="logout" @click="submitLogout">
            <img src="@/assets/icons/power_white.png" width="18" height="18" alt="Logout">
          </button>
        </div>
      </div>
    </div>
  </header>

</template>


<script>

import { mapGetters } from 'vuex'
import { LOGOUT } from '@/store/modules/user.module'

export default {
  name: "TheHeader",

  computed: {
    ...mapGetters(['user']),

    getImage() {
      if (this.user.avatar == '')
        return require('@/assets/images/default-avatar.jpg')
      else {
        return require(this.user.avatar)
      }
    }
  },

  methods: {
    submitLogout() {
      this.$store.dispatch(LOGOUT)

      this.$router.push({ name: 'Login' })
    }
  }
}

</script>


<style lang="scss">

.header-index {
  background-color: $primary-color;
  height: 45px;
  box-shadow: 0px 0px 4px #333;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 99;

  .container {
    display: flex;
    height: inherit;
    max-width: 1040px;
    margin: auto;

    .logo {
      width: 250px;
      display: flex;
      align-items: center;

      img {
        height: 25px;
      }
    }

    .head-side {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .left {
        .search-input {
          background-color: #224b7a;
          background-image: url('../../../assets/icons/search.png');
          background-size: 13px;
          background-position-x: 10px;
          background-position-y: center;
          background-repeat: no-repeat;
          width: 200px;
          height: 25px;
          border-radius: 15px;
          border: 0;
          outline: 0;
          padding-left: 30px;
          transition: all .3s;

          &::placeholder {
            color: #A2B4C9;
          }
        }
      }

      .right {
        display: flex;
        align-items: center;

        a {
          text-decoration: none;
        }

        .user-name {
          color: #fff;
          font-weight: 700;
          margin-right: 10px;
        }

        img {
          border-radius: 50%;
          margin-right: 10px;
        }

        .logout {
          border: none;
          background: transparent;
          cursor: pointer;
        }
      }
    }
  }
}

</style>