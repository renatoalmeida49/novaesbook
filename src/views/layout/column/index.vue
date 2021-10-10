<template>
  <div class="column-index">
    <div class="box">
      <div class="header">
        Patrocínios
      </div>
      <div class="body">
        Obrigado a mim e a mim mesmo.
      </div>
    </div>

    <div class="box">
      <div class="header">
        Feito por Renato Novaes
      </div>
      <div class="body">
        Veja o código desse projeto.
      </div>
    </div>
  </div>
</template>


<script>

export default {
  name: "TheColumn"
}

</script>


<style lang="scss">

.column-index {
  width: 250px;

  .box {
    background-color: #FFF;
    border: 1px solid #c9cacc;
    border-radius: 5px;
    margin-bottom: 10px;
    padding: 10px;

    .header {
      font-size: 18px;
    }
  }
}

</style>