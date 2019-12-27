<template>
  <div id="app">
    <div id="wrapper" v-bind:class="{ load: isLoad }">
      <div id="nav">
        <p><router-link to="/">Works</router-link></p>
        <p><router-link to="/profile">Profile</router-link></p>
      </div>
      <transition name="router-transition">
      <router-view/>
      </transition>
    </div>
  </div>
</template>

<style lang="scss">
@import "@/assets/scss/style.scss";
</style>

<script>
export default {
  data(){
    return {
      isLoad: false
    }
  },
  mounted() {
    this.windowLoad();
  },
  methods: {
    windowLoad: function() {
      const root = this;
      window.addEventListener('load', ()=>{
        root.isLoad = true;
      });
    }
  }
}
</script>
