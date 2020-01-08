const state = {
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

const getters = {
  myWorkList: state => {
    return state.myWorkList;
  }
}

const mutations = {
};

const actions = {

};

export default {
  state,
  mutations,
  actions,
  getters
}