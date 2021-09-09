<template>
  <div class="friends">
      <nav class="friends__nav">
        <ul>
          <router-link :to="{ name: 'Friends', query: { list: 'followers'}, params: { userId: getParam }  }">
            <li :class="isFollowers">Seguidores</li>
          </router-link>
          <router-link :to="{ name: 'Friends', query: { list: 'following' }, params: { userId: getParam } }">
            <li :class="isFollowing">Seguindo</li>
          </router-link>
        </ul>
      </nav>

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
    props: ['user'],
    data() {
      return {
        usersList: []
      }
    },
    created() {
      this.usersToShow()
    },
    watch: {
      '$route.query'() {
        this.usersToShow()
      }
    },
    computed: {
      isFollowers() {
        if (this.$route.query.list == 'followers')
          return 'ativo'
        else
          return ''
      },
      isFollowing() {
        if (this.$route.query.list == 'following')
          return 'ativo'
        else
          return ''
      },
      getParam() {
            return this.$route.params.userId
        }
    },
    methods: {
      usersToShow() {
        if (this.$route.query.list == 'following') {
          this.usersList = this.user.following
        } else {
          this.usersList = this.user.followers
        }
      }
    }
}
</script>

<style lang="scss" scoped>
.friends {
  background-color: #FFF;
    border: 1px solid #c9cacc;
    border-radius: 5px;
    margin-bottom: 10px;

  .friends__nav {
    ul {
      list-style: none;
      display: flex;
      border-bottom: 1px solid #c9cacc;

      a {
        text-decoration: none;
      }

      li {
        padding: 20px;
        cursor: pointer;
        color: #999;

        &.ativo {
          color: #000;
          border-bottom: 2px solid #224b7a;
        }
      }
    }
  }
}
</style>