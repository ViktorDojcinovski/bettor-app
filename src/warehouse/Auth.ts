import axios from 'axios';
import router from '../router';

const state = {
  token: localStorage.getItem('token') || '',
  user: {},
  status: '',
  error: null
};

const getters = {
  isLoggedIn: (state: { token: any }) => !!state.token,
  user: (state: { user: {} }) => state.user,
  status: (state: { status: string }) => state.status,
  error: (state: { error: any }) => state.error
};

const actions = {
  async login({ commit }: any, user: any) {
    try {
      commit('auth_request');
      let res = await axios.post('http://localhost:8001/api/users/login', user);
      if (res.data.success) {
        const token = res.data.token;
        const user = res.data.user;
        localStorage.setItem('token', token);
        axios.defaults.headers.common['Authorization'] = token;
        commit('auth_token', token);
        commit('auth_user', user);
      }
      return res;
    } catch (err) {
      commit('auth_error', err);
    }
  },
  async register({ commit }: any, userData: any) {
    try {
      commit('register_request');
      let res = await axios.post(
        'http://localhost:8001/api/users/register',
        userData
      );
      if (res.data.success != undefined) {
        commit('register_success');
      }
      return res;
    } catch (err) {
      commit('register_error', err);
    }
  },
  async logout({ commit }: any) {
    localStorage.removeItem('token');
    commit('logout');
    delete axios.defaults.headers.common['Authorization'];
    router.push('/login');
    return;
  },
  async confirmEmail({ commit }: any, token: any) {
    try {
      let res = await axios.post(
        'http://localhost:8001/api/users/confirmation',
        token
      );
      if (res.data.success) {
        commit('confirmation_success');
      }
      return res;
    } catch (err) {
      commit('confirmation_error', err);
    }
  }
};

const mutations = {
  auth_request(state: { status: string; error: any }) {
    state.status = 'loading';
    state.error = null;
  },
  auth_token(
    state: { status: string; token: string; user: {}; error: any },
    token: any
  ) {
    state.token = token;
    state.status = 'success';
    state.error = null;
  },
  auth_user(state: { token: string; user: {} }, user: any) {
    state.user = user;
  },
  auth_error(state: { error: any }, error: any) {
    state.error = error.response.data.message;
  },
  register_request(state: { status: string; error: any }) {
    state.status = 'loading';
    state.error = null;
  },
  register_success(state: { status: string; error: any }) {
    state.status = 'success';
    state.error = null;
  },
  register_error(state: { error: any }, error: any) {
    state.error = error.response.data.message;
  },
  confirmation_success(state: { status: any; error: any }) {
    state.status = 'success';
    state.error = null;
  },
  confirmation_error(state: { status: any; error: any }, error: any) {
    state.error = error.response.data.message;
  },
  logout(state: { token: string; user: {} }) {
    state.token = '';
    state.user = {};
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
