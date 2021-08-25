<template>
  <div class="friend-list">
      <template v-for="(friend, index) in friends">
            <router-link :key="index" class="card" :to="{ name: 'UserProfile', params: { userId: friend.id} }">
                <div>
                    <img :src="getImage(friend.avatar)" class="user-avatar" alt="User avatar" width="50" height="50">

                    <p>{{ friend.name }}</p>
                </div>
            </router-link>
      </template>
  </div>
</template>

<script>
export default {
    name: "FriendsList",
    props: ["friends"],
    methods: {
        getImage(avatar) {
            if (avatar)
                return require(avatar)
            else
                return require('@/assets/images/default-avatar.jpg')
        },
    }
}
</script>

<style lang="scss" scoped>
.friend-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    padding: 20px;

    .card {
        flex-basis: 30%;
        text-decoration: none;
        font-size: 13px;

        .user-avatar {
            border-radius: 50%;
        }
    }
}
</style>