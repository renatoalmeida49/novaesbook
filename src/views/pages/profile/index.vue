<template>
<div class="profle-content">
    <div class="header">
        <div class="cover"></div>
        <div class="profile-info">
            <div>
                <img src="@/assets/images/default-avatar.jpg" width="50" height="50" alt="Profile picture">
                <p>(user name</p>
            </div>

            <div>
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
                <p>(bithdate)</p>
                <p>Work</p>
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

            <div>O que você está pensando</div>
        </div>
    </div>
    
</div>
</template>

<script>
export default {
    name: "Profile",
}
</script>

<style>

</style>