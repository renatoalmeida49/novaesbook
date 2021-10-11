<template>

  <div class="profile-content">
    <div class="header">
      <div class="cover" :style="getBackground"></div>
      <div class="profile-info">
        <div class="photo-name">
          <img src="@/assets/images/default-avatar.jpg" width="50" height="50" alt="Profile picture">
          <router-link :to="{ name: 'UserProfile', params: { userId: userProfile.userToShow.id } }">
            <p class="name">{{ userProfile.userToShow.name }}</p>
          </router-link>
        </div>

        <div class="numbers">
          <button class="button-relation" v-if="checkButton" @click="relation">
            {{ textButton }}
          </button>

          <div>
            <router-link :to="{ name: 'Friends', query: { list: 'followers'}, params: { userId: getParam }  }">
              <span>{{ userProfile.followers.length }}</span>
              <p>Seguidores</p>
            </router-link>
          </div>
          <div>
            <router-link :to="{ name: 'Friends', query: { list: 'following' }, params: { userId: getParam } }">
              <span>{{ userProfile.following.length }}</span>
              <p>Seguindo</p>
            </router-link>
          </div>
          <div>
            <span>4</span>
            <p>Fotos</p>
          </div>
        </div>
      </div>
    </div>

    <router-view :user="userProfile"/>
  </div>

</template>


<script>

import { mapGetters, mapActions } from 'vuex'

export default {
  name: "Profile",

  data() {
    return {
      userProfile: {
        userToShow: {},
        postsToShow: [],
        isFollowing: false,
        following: 0,
        followers: 0,
      }
    }
  },

  mounted() {
    if(this.$route.params.userId) {
      this.getProfile(this.$route.params.userId)
    } else {
      this.getProfile(this.user.id)
    }
  },

  computed: {
    ...mapGetters('user', ['user']),
    ...mapGetters('post', ['posts']),
    ...mapGetters('relation', ['following', 'followers']),

    getBackground() {
      return {
        backgroundImage: `url(${require('@/assets/images/default-cover.jpg')}`
      }
    },

    checkButton() {
      if (this.$route.params.userId) {
        return !(this.$route.params.userId == this.user.id)
      } else {
        return false
      }
    },

    textButton() {
      return this.userProfile.isFollowing ? 'Deixar de seguir' : 'Seguir'
    },

    getParam() {
      return this.$route.params.userId
    }
  },

  watch: {
    '$route.params'() {
      this.getProfile(this.$route.params.userId)
    }
  },

  methods: {
    ...mapActions('relation', ['updateRelation']),
      
    getProfile(id) {
      if (id != this.user.id && id != null) {
        this.$api.post('/users/profile', {
            id: id
          })
          .then(response => {
            this.userProfile.userToShow = response.data.user
            this.userProfile.postsToShow = response.data.posts
            this.userProfile.following = Array.from(response.data.following).map(item => {
              return item.to
            })
            this.userProfile.followers = Array.from(response.data.followers).map(item => {
              return item.from
            })

            this.getRelation(id)
          })
      } else {
        this.userProfile.userToShow = this.user
        this.userProfile.postsToShow = this.posts
        this.userProfile.following = this.following
        this.userProfile.followers = this.followers
      }
    },

    relation() {
      this.updateRelation({
        id: this.$route.params.userId,
        user: this.userProfile.userToShow,
        flag: this.userProfile.isFollowing
      })
        .then(() => {
          this.userProfile.isFollowing = !this.userProfile.isFollowing
        })
    },

    getRelation(id) {
      const search = this.following.filter(user => {
        return user.id == id
      })

      search.length == 0 ? this.userProfile.isFollowing = false : this.userProfile.isFollowing = true
    }
  }
}
</script>


<style lang="scss">

.profile-content {
  width: 100%;

  .header {
    margin-bottom: 10px;

    .cover {
      height: 250px;
      background-size: cover;
      background-position: center;
    }

    .profile-info {
      background: #fff;
      border: 1px solid #c9cacc;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 16px;
      border-radius: 5px;

      .photo-name {
        display: flex;
        align-items: center;

        img {
          border-radius: 50%;
          margin-right: 20px;
        }

        .name {
          color: #000;
          font-size: 20px;
        }

        a {
          text-decoration: none;
        }
      }

      .numbers {
        display: flex;
        gap: 50px;

        .button-relation {
          border: 0;
          padding: 10px 20px;
          background-color: $primary-color;
          border-radius: 10px;
          color: #FFF;
          font-size: 15px;
          cursor: pointer;
          box-shadow: 0px 0px 3px #999;
          text-decoration: none;
          display: inline-block;
        }

        span {
          font-weight: bold;
          font-size: 20px;
          color: #224b7a;
        }

        p {
          font-size: 14px;
          color: #999;
        }

        a {
          text-decoration: none;
        }
      }
    }
  }
}

</style>