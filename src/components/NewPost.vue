<template>
<div class="new-post">
    <img :src="getImage" class="user-avatar" alt="User avatar" width="50" height="50">

    <input type="text" class="post-body" :placeholder="getPlaceholderText" />

    <button class="button-send">
        <img src="@/assets/icons/send.png" width="25" height="25" alt="Icon send">
    </button>
</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: "NewPost",
    computed: {
        ...mapGetters(['user']),

        getImage() {
            if (this.user.avatar == '')
                return require('@/assets/images/default-avatar.jpg')
            else {
                return require(this.user.avatar)
            }
        },

        getPlaceholderText() {
            return `O que você está pensando, ${this.user.name}?`
        }
    }
}
</script>

<style lang="scss" scoped>
.new-post {
    background-color: #FFF;
    border: 1px solid #c9cacc;
    border-radius: 5px;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px;
    gap: 8px;

    .user-avatar {
      border-radius: 50%;
    }

    .post-body {
      flex: 1;
      padding: 8px;
      border: none;
    }

    .button-send {
      border: none;
      background: transparent;
      cursor: pointer;
    }
}
</style>