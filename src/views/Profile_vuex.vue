<template>
  <div class="main">
    <mainTtl pageTtl='Profile'></mainTtl>
    <div class="profBox">
      <figure class="profImage"><img v-bind:src="require('@/assets/images/'+ image)" v-bind:alt="name"></figure>

      <h2>{{name}}</h2>
      <dl>
        <dt>Age</dt>
        <dd>{{profileItem.age}}</dd>
      </dl>
      <dl>
        <dt>Job</dt>
        <dd>
          <ul>
            <li v-for="job in profileItem.jobs" v-bind:key="job">{{job}}</li>
          </ul>
        </dd>
      </dl>
      <dl>
        <dt>Hobby</dt>
        <dd>
          <ul>
            <li v-for="hobby in profileItem.hobbys" v-bind:key="hobby">{{hobby}}</li>
          </ul>
        </dd>
      </dl>
      <dl>
        <dt>Skill</dt>
        <dd>
          <ul>
            <li v-for="skill in profileItem.mySkillList" v-bind:key="skill.skillId"><b>{{skill.skilName | skillStar}}</b>{{ skill.skillLevel }}</li>
          </ul>
        </dd> 
      </dl>
    </div>
  </div>
</template>
<script>
import mainTtl from '@/components/mainTtl.vue'
import { mapGetters } from 'vuex';
export default {
  components: {
    mainTtl
  },
  computed: {
    ...mapGetters([
      'profileData'
    ])
  },
  data() {
    return{

    }
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

