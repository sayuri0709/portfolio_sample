<template>
  <div class="home">
    <h1>Works</h1>
    <workList></workList>
  </div>
</template>

<script>
// @ is an alias to /src
import workList from '@/components/workList.vue'

export default {
  name: 'home',
  components: {
    workList
  }
}
</script>
