<template>
  <div id="app">
    <div id="nav">
      <p><router-link to="/">Works</router-link></p>
      <p><router-link to="/profile">Profile</router-link></p>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
@import "@/assets/scss/style.scss";
</style>

<script>
export default {
  created() {
    console.log(this.$store.state.count)
    this.$store.commit('increment')
    console.log(this.$store.state.count)
  }
}
</script>
