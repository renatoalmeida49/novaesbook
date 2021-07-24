<template>
  <header>
      <div class="container">

      </div>
  </header>
</template>

<script>
export default {
    name: "TheHeader"
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
    }
}
</style>