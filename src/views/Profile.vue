<template>
  <div class="main">
    <mainTtl pageTtl='Profile'></mainTtl>
   <div class="profBox">
      <figure class="profImage"><img v-bind:src="require('@/assets/images/'+ getMatchNameDataValue('image'))" v-bind:alt="getMatchNameDataValue('name')"></figure>

      <h2>{{getMatchNameDataValue('name')}}</h2>
      <dl>
        <dt>Age</dt>
        <dd>{{getMatchNameDataValue('age')}}</dd>
      </dl>
      <dl>
        <dt>Job</dt>
        <dd>
          <ul>
            <li v-for="job in getMatchNameDataValue('jobs')" v-bind:key="job">{{job}}</li>
          </ul>
        </dd>
      </dl>
      <dl>
        <dt>Hobby</dt>
        <dd>
          <ul>
            <li v-for="hobby in getMatchNameDataValue('hobbys')" v-bind:key="hobby">{{hobby}}</li>
          </ul>
        </dd>
      </dl>
      <dl>
        <dt>Skill</dt>
        <dd>
          <ul>
            <li v-for="skill in getMatchNameDataValue('mySkillList')" v-bind:key="skill.skillId"><b>{{skill.skilName}}</b>{{ skill.skillLevel | skillStar }}</li>
          </ul>
        </dd> 
      </dl>
    </div>
  </div>
</template>
<script>
import mainTtl from '@/components/mainTtl.vue';
import { mapGetters } from 'vuex';
export default {
  name:'Profile',
  components: {
    mainTtl
  },
  computed: {
    ...mapGetters([
        'myProfileData',
        'getMatchNameDataValue',
        'myWorkList'
    ])
  },
  filters: {
    skillStar: function(val) {
      const starFull = '★';
      const starEmpty = '☆';
      const starFullTxt = starFull.repeat(val);
      const starEmptyTxt = starEmpty.repeat( 5 - val);
      return starFullTxt + starEmptyTxt;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "@/assets/scss/profile.scss";
</style>

