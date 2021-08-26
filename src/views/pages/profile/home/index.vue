<template>
    <div class="content">
        <div class="column">
            <div class="box">
                <p class="line"><img src="@/assets/icons/calendar.png" width="20" height="20" alt="Data de nascimento"/>{{ user.userToShow.birthdate | dateFormat }}</p>
                <p class="line"><img src="@/assets/icons/work.png" width="20" height="20" alt="Data de nascimento"/>{{ user.userToShow.work }}</p>
            </div>       

            <div class="box">
                <div class="header">
                    <p>Seguindo ({{ user.following.length }})</p>
                    <a href="">Ver todos</a>
                </div>
                
                <FriendsList :friends="user.following" />
            </div>
        </div>

        <div class="posts">
            <div class="photos"></div>

            <NewPost />

            <template v-for="(post, index) in user.postsToShow">
                <ThePost :key="index" :post="post"/>
            </template>
        </div>
    </div>
</template>

<script>
import NewPost from "@/components/NewPost"
import ThePost from "@/components/ThePost"
import FriendsList from "@/components/FriendsList.vue"

export default {
    name: "ProfileHome",
    components: {
        NewPost,
        ThePost,
        FriendsList
    },
    props: ['user'],
}
</script>

<style lang="scss" scoped>
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
</style>