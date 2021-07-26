import Vue from 'vue'
import Vuex from 'vuex'
import MoviesService from '../services/movies.service';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: false,
    movies: [],
    movie: {},
  },
  mutations: {
    SET_LOADING(state, payload) {
      if (!payload) {
        // Delay de 1 segundo para ver animación
        setTimeout(() => {
          state.loading = payload
        }, 1000)
      } else {
        state.loading = payload
      }
    },
    SET_MOVIES(state, payload) {
      state.movies = payload
    },
    SET_MOVIE(state, payload) {
      state.movie = payload
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
    async getMovie({commit}, id) {
      commit('SET_LOADING', true)

      const movie = await MoviesService.find(id)

      commit('SET_LOADING', false)

      commit('SET_MOVIE', movie)
    },
  },
  modules: {
  }
})
