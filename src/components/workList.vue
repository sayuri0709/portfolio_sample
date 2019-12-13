
<template>
  <div class="workList">
    <div class="item" v-for="work in myWorkList" v-bind:key="work.id">
        <a v-bind:href="work.url" target="_blank"> 
            <h2>{{work.sitename}}</h2>
            <figure><img v-bind:src="require('@/assets/images/top/'+ work.fileName)" v-bind:alt="work.sitename"></figure>
        </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        myWorkList: [
            {
                id: 1,
                url: "https://cp.pocky.jp/splatoon2018/",
                sitename: `ポッキー×スプラトゥーン2 ポッキーフェス\nキャンペーンサイト`,
                fileName: 'work01.png'
            },
            {
                id: 2,
                url: "https://www.an.shimadzu.co.jp/test/products/mtrl03/agx-v/index.htm",
                sitename: `島津製作所 AGX-V製品ブランドサイト`,
                fileName: 'work02.png'
            },
            {
                id: 3,
                url: "https://www.glico.co.jp/pretz/",
                sitename: `プリッツ ブランドサイト`,
                fileName: 'work03.png'
            },
            {
                id: 4,
                url: "https://kurashitabi.kyoto/",
                sitename: `京都府観光連盟 オウンドメディア\n食らし旅（くらしたび）`,
                fileName: 'work04.png'
            },
            {
                id: 5,
                url: "https://recruit.flypeach.com/",
                sitename: `Peach 採用サイト`,
                fileName: 'work05.png'
            },
            {
                id: 6,
                url: "http://cp.glico.jp/17ice/",
                sitename: `セブンティーンアイス ブランドサイト`,
                fileName: 'work06.png'
            }
            
        ]
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.workList {
    display: flex;
    max-width: 1600px;
    width: 90%;
    margin: 0 auto;
    flex-wrap: wrap;
    justify-content: space-between;
}
.item {
    width: 31%;
    margin: 30px 0 0 0;
    padding: 0;
    a { 
        display: flex;
        flex-direction: column-reverse;
        color: #fff;
        text-decoration: none;
    }
    h2 {
        font-size: 16px;
        margin: 12px 0 0 0;
        text-align: center;
        padding: 0;
        white-space: pre-wrap;
        font-weight: 500;
        line-height: 1.2;
    }
    figure {
        margin: 0;
        overflow: hidden;
        line-height: 0;
        img{
            width: 100%;
            height: auto;
            transition: .3s ease;
            
        }
    }
    a:hover img {
        transform: scale(1.1);
    }
} 
@media all and (max-width: 1024px) and (min-width: 769px){
    .item {
        width: 48%;
        h2 {
            text-align: left;
            font-size: 14px;
        }
    }
}
@media all and (max-width: 768px) {
    .item {
        width: 100%;
        & + .item {
            margin-top: 40px;
        }
        h2 {
            font-size: 14px;
        }
    }
}


</style>
