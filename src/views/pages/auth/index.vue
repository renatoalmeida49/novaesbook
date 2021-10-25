<template>
  
  <div class="auth">
    <header class="auth__header">
      <div class="auth__container">
        <img src="@/assets/novaesbook_logo.png" height="30" alt="Logo Novaesbook">
      </div>
    </header>

    <router-view></router-view>
  </div>

</template>


<script>

export default {
  name: "Auth"
}

</script>


<style lang="scss">

.auth {
  &__header {
    background-color: $primary-color;
    height: 45px;
    box-shadow: 0px 0px 4px #333;
    position: relative;
    z-index: 99;
    margin-bottom: 20px;
  }

  &__container {
    display: flex;
    height: inherit;
    justify-content: center;
    align-items: center;
  }
}

</style>