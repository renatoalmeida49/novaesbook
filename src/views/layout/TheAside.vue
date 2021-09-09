<template>
<aside class="aside">
    <nav class="nav">
        <ul>
            <li>
                <router-link :to="{ path: '/home'}">
                    <img src="@/assets/icons/home-run.png" width="16" height="16" alt="Home icon">
                    Home
                </router-link>
            </li>
            <li>
                <router-link :to="{ path: '/profile'}">
                    <img src="@/assets/icons/user.png" width="16" height="16" alt="Home icon">
                    Meu perfil
                </router-link>
            </li>
            <li>
                <router-link :to="{ name: 'Friends', query: { list: 'followers'} }">
                    <img src="@/assets/icons/friends.png" width="16" height="16" alt="Home icon">
                    Amigos
                </router-link>
            </li>
            <li>
                <router-link :to="{ path: '/photos'}">
                    <img src="@/assets/icons/photo.png" width="16" height="16" alt="Home icon">
                    Fotos
                </router-link>
            </li>

            <div class="spliter"></div>

            <li>
                <router-link :to="{ path: '/settings'}">
                    <img src="@/assets/icons/settings.png" width="16" height="16" alt="Home icon">
                    Configurações
                </router-link>
            </li>
            <li>
                <a @click="submitLogout">
                    <img src="@/assets/icons/power.png" width="16" height="16" alt="Home icon">
                    Sair
                </a>
            </li>
        </ul>
    </nav>
</aside>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: "TheAside",
    methods: {
        ...mapActions('user', ['logout']),

        submitLogout(event) {
            event.preventDefault()
            
            this.logout()

            this.$router.push({ name: 'Login' })
        }
    }
}
</script>

<style lang="scss" scoped>
.aside {
    width: 190px;
    text-align: left;

    .nav {
        ul {
            list-style: none;

            li {
                padding: 5px;
                margin-bottom: 2px;
                cursor: pointer;
                border: 1px solid transparent;
                display: flex;
                align-items: center;

                a {
                    text-decoration: none;
                    color: #224b7a;
                    padding: 5px;
                    display: block;
                    width: 100%;

                    &.router-link-exact-active {
                        background-color: #d1d9e0;
                        border: 1px solid #CCC;
                    }
                }

                &:hover {
                    background-color: #d1d9e0;
                    border: 1px solid #CCC;
                }

                img {
                    margin-right: 5px;
                }
            }

            .spliter {
                border: 1px solid #ccc;
                margin: 5px 0;
            }
        }
    }
}

</style>