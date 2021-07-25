import Vue from 'vue'
import Vuex from 'vuex'
import MoviesService from "../services/movies.service";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: false,
    movies: [],
  },
  mutations: {
    SET_LOADING(state, payload) {
      state.loading = payload
    },
    SET_MOVIES(state, payload) {
      state.movies = payload
    },
  },
  actions: {
    async getMovies({commit}) {
      commit('SET_LOADING', true)

      const movies = await MoviesService.getAll()

      commit('SET_LOADING', false)

      if (movies == null) return;

      commit('SET_MOVIES', movies)

    },
  },
  modules: {
  }
})
