<template>
<div class="profile-content">
    <div class="header">
        <div class="cover" :style="getBackground"></div>
        <div class="profile-info">
            <div class="photo-name">
                <img src="@/assets/images/default-avatar.jpg" width="50" height="50" alt="Profile picture">
                <p class="name">{{ user.name }}</p>
            </div>

            <div class="numbers">
                <div>
                    <span>14</span>
                    <p>Seguidores</p>
                </div>
                <div>
                    <span>54</span>
                    <p>Seguindo</p>
                </div>
                <div>
                    <span>4</span>
                    <p>Fotos</p>
                </div>
            </div>
        </div>
    </div>

    <div class="content">
        <div class="column">
            <div class="box">
                <p>{{ user.birthdate | dateFormat }}</p>
                <p>{{ user.work }}</p>
            </div>

            <div class="box">
                <div>
                    <p>Seguindo</p>
                    <a href="">Ver todos</a>
                </div>
                
                <div>
                    <p>Avatares</p>
                </div>
            </div>
        </div>

        <div class="posts">
            <div class="photos"></div>

            <NewPost />

            <template v-for="(post, index) in posts">
                <ThePost :key="index" :post="post"/>
            </template>
        </div>
    </div>
    
</div>
</template>

<script>
import { mapGetters } from 'vuex'

import NewPost from "@/components/NewPost"
import ThePost from "@/components/ThePost"

export default {
    name: "Profile",
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
        this.getUserPosts()
    },
    computed: {
        ...mapGetters('user', ['user']),

        getBackground() {
            return {
                backgroundImage: `url(${require('@/assets/images/default-cover.jpg')}`
            }
        }
    },
    methods: {
        getUserPosts() {
            const id = this.user.id

            this.$http.post('posts/user-posts', {
                userId: id
            })
                .then(response => {
                    this.posts = response.data.posts
                })
        }
    }
}
</script>

<style lang="scss" scoped>
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
            }

            .numbers {
                display: flex;
                gap: 50px;

                span {
                    font-weight: bold;
                    font-size: 20px;
                    color: #224b7a;
                }

                p {
                    font-size: 14px;
                    color: #999;
                }
            }
        }
    }

    .content {
        display: flex;
        gap: 10px;

        .column {
            width: 250px;

            .box {
                background: #fff;
                border: 1px solid #c9cacc;
                border-radius: 5px;
                margin-bottom: 10px;
                padding: 8px;
            }
        }

        .posts {
            flex: 1;
        }
    }
}
</style>