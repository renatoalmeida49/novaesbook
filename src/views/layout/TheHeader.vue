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
                  <p>{{ user.name }}</p>
                  <button>Logoff</button>
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
        ...mapGetters(['user'])
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
            }
        }
    }
}
</style>