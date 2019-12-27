import profileItem from '../../assets/json/profileData'

const state = {
  profileItem
};

const getters = {
  profileData: state => {
    return state.profileItem;
  },
};

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