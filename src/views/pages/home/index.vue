<template>

  <div class="home-content">
    <NewPost />

    <template v-for="(post, index) in posts">
      <ThePost :key="index" :post="post" />
    </template>
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
      this.$api.get('/posts/')
        .then(response => {
          this.posts = response.data.posts
        })
    }
  }
}

</script>


<style lang="scss">

.home-content {
  width: 100%;
}

</style>