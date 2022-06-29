<template>
  <h1>About Page</h1>
  <router-link :to="{ name: 'Home' }">Home</router-link> |
  <router-link :to="{ name: 'About' }">About</router-link>
</template>

<script>
export default {
  name: "About"
}
</script>

<style scoped>

</style>
