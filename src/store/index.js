import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
  books_data_body_subjects: []
  // guodu: true
}

const getters = {
  getBooks (states) {
    return states.books_data_body_subjects
  }
  // getGuodu (states) {
  //   return states.guodu
  // }
}

const mutations = {
  CBV (states, obj) {
    states.books_data_body_subjects = obj.items
  }
  // CG (states) {
  //   states.guodu = !states.guodu
  // }
}

const actions = {
  changeBooksVariety ({ commit }, param) {
    commit('CBV', {items: param})
  }
  // changeGuodu ({ commit }) {
  //   commit('CG')
  // }
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
