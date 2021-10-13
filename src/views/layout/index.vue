<template>
  <div v-if="isAuthenticaded">
    <p></p>
    <TheHeader />

    <section id="content">
      <TheAside />

      <div class="view">
        <router-view></router-view>
      </div>

      <TheColumn v-if="showColumn" />
    </section>
  </div>
</template>


<script>

import TheHeader from "./header/index.vue"
import TheAside from "./aside/index.vue"
import TheColumn from "./column/index.vue"

export default {

  name: "TheLayout",

  components: {
    TheHeader,
    TheAside,
    TheColumn
  },

  mounted() {
    if (!this.isAuthenticaded) {
      this.$router.push({ name: 'Login' } )
    }
  },

  computed: {
    isAuthenticaded() {
      return this.$store.getters.isAuthenticaded
    },
    showColumn() {
      return !this.$route.path.includes('/profile') 
    }
  }
}

</script>


<style lang="scss" scoped>

#content {
  display: flex;
  height: inherit;
  max-width: 1040px;
  margin: auto;
  justify-content: space-between;
  gap: 10px;
  margin-top: 55px;

  .view {
    display: flex;
    flex: 1;
    width: 100%;
    margin-left: 200px;
  }
}

</style>