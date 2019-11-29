<template>
  <div class="about">
    <h1>Profile</h1>
    <div class="profBox">
      <h2>{{name}}</h2>
      <dl>
        <dt>Job</dt>
        <dd>
          <p v-for="job in jobs" v-bind:key="job">{{job}}</p>
        </dd>
      </dl>
      <dl>
        <dt>Skill</dt>
        <dd>
          <ul v-for="skill in mySkillList" v-bind:key="skill.skillId">
            <li><b>{{skill.skilName}}</b>{{ skill.skillLevel | skillStar}}</li>
          </ul>
        </dd>
        
      </dl>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: 'Hamada Sayuri',
      jobs: ['HTMLコーダー', 'フロントエンドエンジニア'],
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
<style scoped lang="scss">
  .profImage{
    width: 200px;
    height: 200px;
    overflow: hidden;
    border-radius: 50%;
    margin: 0 auto;
    line-height: 0;
    position: relative;
    img {
      width: 100%;
      position: absolute;
      top:50%;
      left: 50%;
      transform: translate(-50%,-50%);
    }
  }
  .profBox{
    width: 90%;
    max-width: 600px;
    margin: 0 auto;
    h2 {
      font-size: 22px;
      margin: 15px auto 30px;
    }
    dl {
      margin-top: 15px;
      display: flex;
      text-align: left;
      align-items: flex-start;
      dt {
        width: 20%;
        font-size: 18px;
        font-weight: 600;
      }
      dd {
        width: 80%;
        margin: 0;
        font-size: 16px;
        padding: 0;
        ul {
          margin: 0;
          padding: 0;
          list-style-type: none;
          li {
            & + li {
              margin-top: 10px;;
            }
            b {
              display: inline-block;
              width: 6em;
              margin-right: 15px;
              text-align: left;
            }
          }
        }
        a {
          color: #fff;
        }
      }
    }
  }

</style>

