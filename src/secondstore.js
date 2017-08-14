import Vue from 'vue'
import Vuex from 'vuex'

const store = new Vuex.Store({
    state: {
        lang: 'ro',
        labels: {},
        postList: [],
        postListPosition: 0,
        totalPages: undefined
    },
    getters: {
        getPostList: state => {
            return state.postList
        }
    },
    mutations: {
        updateLang(state, lang) {
            state.lang = lang
        },
        setLabels(state, data) {
            state.labels = data
        },
        setPostList(state, data) {
            state.postList = data
        },
        setPostListPosition(state, page) {
            state.postListPosition = page
        },
        setTotalPages(state, num) {
            state.totalPages = num
        }
    }
})