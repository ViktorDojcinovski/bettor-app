import axios from 'axios';
import router from '../router';

const state = {
  loading_data: 'loading'
};

const getters = {
  loading_data: (state: { loading_data: string }) => state.loading_data
};

const actions = {
  async getOddsApiData({ commit }: any) {
    commit('loading_data');
    let res = await axios.get(
      'https://odds.p.rapidapi.com/v1/odds?sport=soccer_epl&region=uk&mkt=h2h',
      {
        headers: {
          'x-rapidapi-host': 'odds.p.rapidapi.com',
          'x-rapidapi-key': 'd0c5146694msh9da3ce363f8b442p1c0447jsn6f463b61beda'
        }
      }
    );
    if (res.data.success) {
      if (res.data.error) throw new Error(res.data.error);
      commit('loading_data_success');
      return res.data;
    }
  }
};

const mutations = {
  loading_data_success(state: { loading_data: string }) {
    state.loading_data = 'success';
  },
  loading_data(state: { loading_data: string }) {
    state.loading_data = 'loading';
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
