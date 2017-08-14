import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// root state object.
// each Vuex instance is just a single state tree.
const state = {
  lang: 'ro',
  labels: {},
  postList: [],
  postListPosition: 0,
  totalPages: undefined
}

// mutations are operations that actually mutates the state.
// each mutation handler gets the entire state tree as the
// first argument, followed by additional payload arguments.
// mutations must be synchronous and can be recorded by plugins
// for debugging purposes.
const mutations = {
  updateLang(state, lang) {
    state.lang = lang
  },
  setLabels(state, data) {
    state.labels = data
  },
  setPostList(state, data){
    state.postList = data
  },
  setPostListPosition(state, page){
    state.postListPosition = page
  },
  setTotalPages(state,num){
    state.totalPages = num
  }
}

// actions are functions that causes side effects and can involve
// asynchronous operations.
const actions = {

}

// getters are functions
const getters = {
  getPostList: state => {
    return state.postList
  },
  getCurrentPage: state => {
    return state.postListPosition
  },
  getTotalPages: state => {
    return state.totalPages
  }
}

// A Vuex instance is created by combining the state, mutations, actions,
// and getters.
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
