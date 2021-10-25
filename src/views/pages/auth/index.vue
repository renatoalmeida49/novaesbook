<template>
  
  <div class="auth">
    <header class="auth__header">
      <div class="auth__container">
        <img src="@/assets/novaesbook_logo.png" height="30" alt="Logo Novaesbook">
      </div>
    </header>

    <transition name="slide-side" mode="out-in">
      <router-view></router-view>
    </transition>
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

  .slide-side-enter-active {
    animation: slide 0.3s ease-out;
  }
  .slide-side-leave-active {
    animation: slide 0.3s ease-out reverse;
  }

  @keyframes slide {
    0% {
      opacity: 0;
      transform: translateX(30px);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
}

</style>