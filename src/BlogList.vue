<template>
    <div class="demo-card-wide mdl-card mdl-shadow--2dp">
        <div class="mdl-card__title">
            <h2 class="mdl-card__title-text">Welcome</h2>
        </div>
        <div class="mdl-card__supporting-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque lacus eleifend lacinia...
        </div>
        <div class="mdl-card__actions mdl-card--border">
            <router-link class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" to="/blog/page/2">
                Get Started
            </router-link>
        </div>
        <div class="mdl-card__menu">
            <button class="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
                <i class="material-icons">share</i>
            </button>
        </div>
    </div>
</template>

<script>
var Prismic = require('prismic.io')

import Vuex from 'vuex';
import { mapGetters } from 'vuex'
import store from './store.js'
export default {
    name: 'bloglist',

    data() {
        return {
            rawContent: {},
            content: {},
            title: "",
            pages: 1,
            fetched: false
        }
    },
    watch: {
        '$route'(to, from) {
            this.updateList(this.$route.params.page)
        }
    },
    mounted() {
        var currentPage = this.$route.params.page || 1
        this.updateList(currentPage)
    },
    computed: {
        ...mapGetters(['getPostList'])
    },
    methods: {
        updateList(page) {
            if (page != store.state.postListPosition) {
                let _this = this
                Prismic.api("//coltalb.prismic.io/api").then(function (api) {
                    api.query(
                        Prismic.Predicates.at('document.type', 'blog'),
                        {
                            pageSize: 10,
                            page: page,
                            orderings: '[my.blog.lastPublicationDate]'
                        }
                    ).then(function (stories) {
                        //If exceeding the max page size, go to 404

                        if (stories['total_pages'] < page) {
                            let redir = '/blog'
                            if (stories['total_pages'] > 1)
                                redir = '/blog/page/' + stories['total_pages']
                            _this.$router.push(redir)
                        } 

                        
                        store.commit('setPostList', stories.results)
                        store.commit('setPostListPosition', page)
                    });

                })
            }
        }
    }
}
</script>

<style>
.demo-card-wide.mdl-card {
    width: 512px;
}

.demo-card-wide>.mdl-card__title {
    color: #fff;
    height: 176px;
    /*background: url('../assets/demos/welcome_card.jpg') center / cover;*/
}

.demo-card-wide>.mdl-card__menu {
    color: #fff;
}
</style>