<template>
  <div>
      <h1>Friends page</h1>
  </div>
</template>

<script>
export default {
    name: "FriendsPage",
    props: {
      user: { type: Object, required: true},
      type: { type: String, required: false, default: "following"}
    },
}
</script>

<style>

</style>