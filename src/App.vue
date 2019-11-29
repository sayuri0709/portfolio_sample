<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Works</router-link> |
      <router-link to="/profile">Profile</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
@import "@/assets/scss/style.scss";
</style>
