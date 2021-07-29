<template>
<div class="home-content">
  <NewPost />

  <template v-for="(post, index) in posts">
    <ThePost :key="index" :post="post" />
  </template>
</div>
</template>

<script>
import { mapActions } from 'vuex'
import NewPost from '@/components/NewPost'
import ThePost from '@/components/ThePost'

export default {
  name: "Home",
  components: {
    NewPost,
    ThePost
  },
  data() {
    return {
      posts: null
    }
  },
  created() {
    this.getMyPosts()
  },
  methods: {
    ...mapActions('post', ['getMyPosts'])
  }
}
</script>

<style lang="scss" scoped>
.home-content {
  width: 100%;
}
</style>