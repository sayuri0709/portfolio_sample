import Vue from 'vue';
import Vuex from 'vuex';
import myWorkList from './modules/myWorkList';
import profileData from './modules/profileData';

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        myWorkList,
        profileData
    }
})
export default store