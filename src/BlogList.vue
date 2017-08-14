<template>
    <div>
        <div v-for="post in posts" v-bind:key="post.uid" class="demo-card-wide mdl-card mdl-shadow--2dp">
            <div class="mdl-card__title" v-bind:style="{'background-image':'url('+post.data['blog.image'].value.main.url+')'}">
                <h2 class="mdl-card__title-text">{{post.data['blog.title'].value}}</h2>
            </div>
            <div class="mdl-card__supporting-text">
                {{post.data['blog.shorttext'].value}}
            </div>
            <div class="mdl-card__actions mdl-card--border">
                <router-link class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" v-bind:to="'/blog/'+post.uid">
                    Citeste
                </router-link>
            </div>
            <div class="mdl-card__menu">
                <button class="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
                    <i class="material-icons">share</i>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
var Prismic = require('prismic.io')


import store from './store.js'
import { mapGetters } from 'vuex'
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
            console.log('Routed')
            console.log(to)
            console.log(from)
            console.log('-----------')
            this.updateList(this.$route.params.page)
        }
    },
    mounted() {
        var firstPage = this.$route.params.page || 1
        console.log('Mounted at ' + firstPage)
        this.updateList(firstPage)
    },
    computed: {
        posts() {
            return store.state.postList
        },
        currentPage() {
            return store.state.postListPosition
        }
    },
    methods: {
        is_Natural(n) {
            return (n >= 0.0) && (Math.floor(n) === n) && n !== Infinity;
        },
        updateList(page) {
            let _this = this
            if (isNaN(page) || !this.is_Natural(page) || (store.state.totalPages !== undefined && page > store.state.totalPages)) {
                let redir = '/blog'
                if (store.state.totalPages > 1)
                    redir = '/blog/page/' + store.state.totalPages
                console.log('Redirecting to '+redir)
                _this.$router.push(redir)
            }
            else
                if (page != this.currentPage && this.posts !== undefined) {
                    console.log('Current page is ' + this.currentPage)
                    console.log('Page is ' + page)
                    console.log('Updating')

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

                            store.commit('setTotalPages', stories['total_pages'])

                            if (store.state.totalPages < page) {
                                console.log('Setting total pages')
                                console.log('Page is ' + page)
                                console.log('TotalPages is ' + store.state.totalPages)
                                store.commit('setPostListPosition', store.state.totalPages)
                                let redir = '/blog'
                                if (store.state.totalPages > 1)
                                    redir = '/blog/page/' + store.state.totalPages
                                console.log('Redirecting after API call')
                                _this.$router.push(redir)
                            }
                            else store.commit('setPostListPosition', page)

                            store.commit('setPostList', stories.results)

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