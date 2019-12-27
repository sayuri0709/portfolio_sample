<template>
  <div class="main">
    <mainTtl pageTtl='Profile'></mainTtl>
    <div class="profBox">
      <figure class="profImage"><img v-bind:src="require('@/assets/images/'+ image)" v-bind:alt="name"></figure>

      <h2>{{name}}</h2>
      <dl>
        <dt>Age</dt>
        <dd>{{age}}</dd>
      </dl>
      <dl>
        <dt>Job</dt>
        <dd>
          <ul>
            <li v-for="job in jobs" v-bind:key="job">{{job}}</li>
          </ul>
        </dd>
      </dl>
      <dl>
        <dt>Hobby</dt>
        <dd>
          <ul>
            <li v-for="hobby in hobbys" v-bind:key="hobby">{{hobby}}</li>
          </ul>
        </dd>
      </dl>
      <dl>
        <dt>Skill</dt>
        <dd>
          <ul>
            <li v-for="skill in mySkillList" v-bind:key="skill.skillId"><b>{{skill.skilName}}</b>{{ skill.skillLevel | skillStar }}</li>
          </ul>
        </dd> 
      </dl>
    </div>
  </div>
</template>
<script>
import mainTtl from '@/components/mainTtl.vue'
export default {
  components: {
    mainTtl
  },
  data() {
    return {
      name: 'Hamada Sayuri',
      image:'img_profile.jpg',
      jobs: ['HTMLコーダー', 'フロントエンドエンジニア'],
      hobbys: ['お酒を飲む', '映画を見る', 'ライブに行く'],
      age: 28,
      mySkillList: [
        {
          skillId: 1,
          skilName: 'HTML',
          skillLevel: 5
        },
        {
          skillId: 2,
          skilName: 'CSS',
          skillLevel: 5
        },
        {
          skillId: 3,
          skilName: 'JavaScript',
          skillLevel: 3
        },
        {
          skillId: 4,
          skilName: 'Vue.js',
          skillLevel: 3
        },
        {
          skillId: 5,
          skilName: 'jQuery',
          skillLevel: 4
        },
        {
          skillId: 6,
          skilName: 'PHP',
          skillLevel: 2
        },
        {
          skillId: 7,
          skilName: 'WordPress',
          skillLevel: 2
        },
        {
          skillId: 8,
          skilName: 'Photoshop',
          skillLevel: 5
        },
        {
          skillId: 9,
          skilName: 'Illustrator',
          skillLevel: 2
        },
      ]
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

