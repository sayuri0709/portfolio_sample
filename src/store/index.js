import Vue from 'vue';
import Vuex from 'vuex';
import profileData from './modules/profileData';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        profileData
    }
});
