<template>
<div class="home-content">
  <NewPost />

  <template v-for="(post, index) in posts">
    <ThePost :key="index" :post="post" />
  </template>
</div>
</template>

<script>
import { api } from '@/services/api'
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
  mounted() {
    this.getHomePage()
  },
  methods: {
    getHomePage() {
      api.get('/posts/')
        .then(response => {
          this.posts = response.data.posts
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.home-content {
  width: 100%;
}
</style>