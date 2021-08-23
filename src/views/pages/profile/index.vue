<template>
<div class="profile-content">
    <div class="header">
        <div class="cover" :style="getBackground"></div>
        <div class="profile-info">
            <div class="photo-name">
                <img src="@/assets/images/default-avatar.jpg" width="50" height="50" alt="Profile picture">
                <p class="name">{{ userToShow.name }}</p>
            </div>

            <div class="numbers">
                <button class="button-relation" v-if="checkButton" @click="relation">
                    {{ textButton }}
                </button>

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
                <p>{{ userToShow.birthdate | dateFormat }}</p>
                <p>{{ userToShow.work }}</p>
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

            <template v-for="(post, index) in postsToShow">
                <ThePost :key="index" :post="post"/>
            </template>
        </div>
    </div>
    
</div>
</template>

<script>
import { mapGetters } from 'vuex'
import { api } from '@/services/api'

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
            userToShow: {},
            postsToShow: [],
            isFollowing: false
        }
    },
    mounted() {
        this.render()
        this.getRelation()
    },
    computed: {
        ...mapGetters('user', ['user']),
        ...mapGetters('post', ['posts']),

        getBackground() {
            return {
                backgroundImage: `url(${require('@/assets/images/default-cover.jpg')}`
            }
        },

        checkButton() {
            return this.$route.params.userId ? true : false
        },

        textButton() {
            return this.isFollowing ? 'Deixar de seguir' : 'Seguir'
        }
    },
    watch: {
        '$route.params'() {
            this.render()
        }
    },
    methods: {
        render() {
            if(this.$route.params.userId) {
                api.post('/users/profile', {
                    id: this.$route.params.userId
                })
                .then(response => {
                    this.userToShow = response.data.user
                    this.postsToShow = response.data.posts
                })
            } else {
                this.userToShow = this.user
                this.postsToShow = this.posts
            }
        },

        relation() {
            api.put('/relations/', {
                user_to: this.$route.params.userId
            })
                .then(() => {
                    this.isFollowing = !this.isFollowing
                })
        },

        getRelation() {
            api.post('/relations/', {
                user_to: this.$route.params.userId
            })
                .then(response => {
                    if (response.data.flag) {
                        this.isFollowing = true
                    }
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

                .button-relation {
                    border: 0;
                    padding: 10px 20px;
                    background-color: #4a76a8;
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