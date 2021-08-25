<template>
  <div>
      <h1>Friends page</h1>

      <FriendsList :friends="usersList"/>
  </div>
</template>

<script>
import FriendsList from "@/components/FriendsList.vue"

export default {
    name: "FriendsPage",
    components: {
      FriendsList
    },
    data() {
      return {
        usersList: []
      }
    },
    props: {
      user: { type: Object, required: true},
    },
    created() {
      this.usersToShow()
    },
    watch: {
      '$route.query'() {
        this.usersToShow()
      }
    },
    methods: {
      usersToShow() {
        if (this.$route.query.list == 'following') {
          this.usersList = Array.from(this.user.following).map(item => {
            return item.to
          })
        } else {
          this.usersList = Array.from(this.user.followers).map(item => {
            return item.from
          })
        }
      }
    }
}
</script>

<style>

</style>