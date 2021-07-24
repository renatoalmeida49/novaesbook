<template>
<aside class="aside">
    <nav class="nav">
        <ul>
            <li>
            <img src="@/assets/icons/home-run.png" width="16" height="16" alt="Home icon">
                Home
            </li>
            <li>
                <img src="@/assets/icons/user.png" width="16" height="16" alt="Home icon">
                Meu perfil
            </li>
            <li>
                <img src="@/assets/icons/friends.png" width="16" height="16" alt="Home icon">
                Amigos
            </li>
            <li>
                <img src="@/assets/icons/photo.png" width="16" height="16" alt="Home icon">
                Fotos
            </li>
            <div>(Spliter</div>
            <li>
                <img src="@/assets/icons/settings.png" width="16" height="16" alt="Home icon">
                Configurações
            </li>
            <li>
                <img src="@/assets/icons/power.png" width="16" height="16" alt="Home icon">
                Sair
            </li>
        </ul>
    </nav>
</aside>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.aside {
    width: 190px;
    color: #224b7a;
    text-align: left;

    .nav {
        ul {
            list-style: none;
        }
    }
}

</style>