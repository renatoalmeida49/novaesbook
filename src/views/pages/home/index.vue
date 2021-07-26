<template>
<div class="home-content">
  <div class="new-post">
    <img :src="getImage" class="user-avatar" alt="User avatar" width="50" height="50">

    <input type="text" class="post-body" :placeholder="getPlaceholderText" />

    <button class="button-send">
      <img src="@/assets/icons/send.png" width="25" height="25" alt="Icon send">
    </button>
  </div>

  <div class="post">
    <div class="header">
      <img src="@/assets/images/default-avatar.jpg" width="50" height="50" alt="Avatar post">
      
      <div class="author">
        <p>(Autor do post) fez um post</p>
        <p>25/10/1996</p>
      </div>
      <div>
        <img src="@/assets/icons/more.png" width="20" height="20" alt="Ícone opções">
      </div>

    </div>
    <div class="body">
      Grandíssimo! Bravo!
    </div>
    <div class="reactions">
      <img src="@/assets/icons/heart-off.png" width="25" height="25" alt="Like icon"> 0
      <img src="@/assets/icons/comment.png" width="25" height="25"  alt="Comment icon"> 0
    </div>
    <div class="comments">
      <img src="@/assets/images/default-avatar.jpg" width="35" height="35" alt="Avatar user">
      <input type="text" placeholder="Escreva um comentário">
    </div>
  </div>
</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: "Home",
  components: {
    
  },
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
.home-content {
  width: 100%;

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

  .post {
    background: #fff;
    border: 1px solid #c9cacc;
    border-radius: 5px;
    margin-bottom: 10px;
    padding: 8px;

    .header {
      display: flex;
      align-items: center;

      img {
        border-radius: 50%;
        margin-right: 10px;
      }

      .author {
        flex: 1;
        text-align: start;
        font-size: 14px;
      }
    }

    .body {
      padding: 30px 10px;
      text-align: left;
      font-size: 14px;
    }

    .reactions {
      display: flex;
      align-items: center;
      padding: 10px 0;
      gap: 10px;
      color: #5F7D95;
      text-align: center;
      border-top: 1px solid #EEE;
      border-bottom: 1px solid #EEE;
    }

    .comments {
      display: flex;
      padding: 10px 0;

      img {
        border-radius: 50%;
        margin-right: 10px;
      }

      input {
        width: 100%;
        height: 35px;
        border-radius: 20px;
        border: 0;
        outline: 0;
        background-color: #eee;
        font-size: 13px;
        padding: 0 15px;
      }
    }
  }
}
</style>