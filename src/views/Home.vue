<template>
  <div class="main home">
    <mainTtl pageTtl='Works'></mainTtl>
    <workList></workList>
  </div>
</template>

<script>
// @ is an alias to /src
import workList from '@/components/workList.vue'
import mainTtl from '@/components/mainTtl.vue'

export default {
  name: 'home',
  components: {
    workList,
    mainTtl
  }
}
</script>
