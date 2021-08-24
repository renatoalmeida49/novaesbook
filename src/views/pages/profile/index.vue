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
                    <span>{{ followers.length }}</span>
                    <p>Seguidores</p>
                </div>
                <div>
                    <span>{{ following.length }}</span>
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
                <p class="line"><img src="@/assets/icons/calendar.png" width="20" height="20" alt="Data de nascimento"/>{{ userToShow.birthdate | dateFormat }}</p>
                <p class="line"><img src="@/assets/icons/work.png" width="20" height="20" alt="Data de nascimento"/>{{ userToShow.work }}</p>
            </div>       

            <div class="box">
                <div class="header">
                    <p>Seguindo ({{ following.length }})</p>
                    <a href="">Ver todos</a>
                </div>
                
                <FriendsList :friends="following" />
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
import FriendsList from "@/components/FriendsList.vue"

export default {
    name: "Profile",
    components: {
        NewPost,
        ThePost,
        FriendsList
    },
    data() {
        return {
            userToShow: {},
            postsToShow: [],
            isFollowing: false,
            following: 0,
            followers: 0,
        }
    },
    mounted() {
        if(this.$route.params.userId) {
            this.getProfile(this.$route.params.userId)
        } else {
            this.getProfile(this.user.id)
        }
        
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
        getProfile(id) {
            api.post('/users/profile', {
                    id: id
                })
                .then(response => {
                    this.userToShow = response.data.user
                    this.postsToShow = response.data.posts
                    this.following = response.data.following
                    this.followers = response.data.followers
                })
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

                .header {
                    display: flex;
                    justify-content: space-between;
                    font-size: 13px;
                    padding: 10px;

                    a {
                        text-decoration: none;
                        color: #999;
                    }
                }
                
                .line {
                    text-align: left;
                    padding: 10px 10px;
                    display: flex;
                    align-items: center;
                    gap: 20px;
                    font-size: 13px;
                    color: #819db9;
                }
            }
        }

        .posts {
            flex: 1;
        }
    }
}
</style>