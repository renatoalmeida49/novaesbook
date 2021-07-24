<template>
<div>
    <TheHeader />

    <router-view></router-view>
</div>
</template>

<script>
import TheHeader from "@/views/layout/TheHeader"

export default {
    name: "TheLayout",
    components: {
        TheHeader
    }
}
</script>

<style>

</style>