<template>
<div class="home-content">
  <NewPost />

  <ThePost />
</div>
</template>

<script>
import NewPost from '@/components/NewPost'
import ThePost from '@/components/ThePost'

export default {
  name: "Home",
  components: {
    NewPost,
    ThePost
  },
}
</script>

<style lang="scss" scoped>
.home-content {
  width: 100%;
}
</style>