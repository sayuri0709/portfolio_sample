const state = {
  myProfileData: [
    {
      id: 1,
      dataLabel: 'name',
      dataValue: 'Hamada Sayuri'
    },
    {
      id: 2,
      dataLabel: 'image',
      dataValue: 'img_profile.jpg'
    },
    {
      id: 3,
      dataLabel: 'jobs',
      dataValue: ['HTMLコーダー', 'フロントエンドエンジニア']
    },
    {
      id: 4,
      dataLabel: 'hobbys',
      dataValue: ['お酒を飲む', '映画を見る', 'ライブに行く']
    },
    {
      id: 5,
      dataLabel: 'age',
      dataValue: '28'
    },
    {
      id: 6,
      dataLabel: 'mySkillList',
      dataValue: [
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
    },
  ]
}

const getters = {
  myProfileData: state => {
    return state.myProfileData;
  },
  getMatchNameDataValue: state => {
    return dataLabel => {
      const getData = state.myProfileData.filter(data => data.dataLabel === dataLabel);
      return getData[0].dataValue;
    }
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