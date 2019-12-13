
<template>
  <div id="mainTtl">
    <h1>{{pageTtl}}</h1>
  </div>
</template>

<script>
export default {
  name: 'mainTtl',
  props: ['pageTtl']
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#mainTtl {
  text-align: center;
  font-size: 2.0rem;
  padding-bottom: 15px;
  position: relative;
  &::after {
    content: "";
    width: 40px;
    height: 2px;
    background: #fff;
    bottom: 0;
    left: 50%;
    transform: translate(-50%,0);
    position: absolute;
  }
}
</style>
