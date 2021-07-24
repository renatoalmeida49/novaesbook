<template>
  <header>
      <div class="container">
          <div class="logo">
              <img src="@/assets/devsbook_logo.png" alt="Logo">
          </div>

          <div class="head-side">
              <div class="left">
                  <input type="text" placeholder="Pesquisar">
              </div>

              <div class="right">
                  <p class="user-name">{{ user.name }}</p>
                  <img :src="getImage" width="24" height="24" alt="Avatar">
                  <button class="logout">
                      <img src="@/assets/icons/power_white.png" width="18" height="18" alt="Logout">
                  </button>
              </div>
          </div>
      </div>
  </header>
</template>

<script>
import { mapGetters } from 'vuex'

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
    }
}
</script>

<style lang="scss" scoped>
header {
    background-color: #4a76a8;
    height: 45px;
    box-shadow: 0px 0px 4px #333;
    position: relative;
    z-index: 99;

    .container {
        display: flex;
        height: inherit;
        max-width: 1040px;
        margin: auto;

        .logo {
            width: 200px;
            display: flex;
            align-items: center;

            img {
                height: 20px;
            }
        }

        .head-side {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;

            .right {
                display: flex;
                align-items: center;

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