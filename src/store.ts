import Vue from 'vue';
import Vuex from 'vuex';

import Auth from './warehouse/Auth';
import Data from './warehouse/Data';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Auth,
    Data
  },
  state: {},
  mutations: {},
  actions: {}
});
