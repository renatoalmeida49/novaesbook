<template>
<div class="profile-content">
    <div class="header">
        <div class="cover" :style="getBackground"></div>
        <div class="profile-info">
            <div class="photo-name">
                <img src="@/assets/images/default-avatar.jpg" width="50" height="50" alt="Profile picture">
                <p class="name">{{ userProfile.userToShow.name }}</p>
            </div>

            <div class="numbers">
                <button class="button-relation" v-if="checkButton" @click="relation">
                    {{ textButton }}
                </button>

                <div>
                    <span>{{ userProfile.followers.length }}</span>
                    <p>Seguidores</p>
                </div>
                <div>
                    <span>{{ userProfile.following.length }}</span>
                    <p>Seguindo</p>
                </div>
                <div>
                    <span>4</span>
                    <p>Fotos</p>
                </div>
            </div>
        </div>
    </div>

    <router-view :user="userProfile "/>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
import { api } from '@/services/api'

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
            return this.userProfile.isFollowing ? 'Deixar de seguir' : 'Seguir'
        }
    },
    watch: {
        '$route.params'() {
            this.getProfile(this.user.id)
        }
    },
    methods: {
        getProfile(id) {
            api.post('/users/profile', {
                    id: id
                })
                .then(response => {
                    this.userProfile.userToShow = response.data.user
                    this.userProfile.postsToShow = response.data.posts
                    this.userProfile.following = response.data.following
                    this.userProfile.followers = response.data.followers
                })
        },

        relation() {
            api.put('/relations/', {
                user_to: this.$route.params.userId
            })
                .then(() => {
                    this.userProfile.isFollowing = !this.userProfile.isFollowing
                })
        },

        getRelation() {
            api.post('/relations/', {
                user_to: this.$route.params.userId
            })
                .then(response => {
                    if (response.data.flag) {
                        this.userProfile.isFollowing = true
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
}
</style>