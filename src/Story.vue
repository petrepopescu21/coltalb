<template>
    <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <navbar></navbar>
        <sidebar></sidebar>
        <div class="mdl-layout__content">
            <div class="coltalb-content-narrow ">
                <img class="coltalb-dog-logo-image" src="./assets/colt_alb_negru.png">
                <h1>{{title}}</h1>
                <div v-html="content"></div>
            </div>
            <footere></footere>
        </div>
    
    </div>
</template>

<script>
import Footere from './Footere.vue'
import Navbar from './Navbar.vue'
import Sidebar from './Sidebar.vue'
import store from './store.js'
var Prismic = require('prismic.io')
var marked = require('marked')
var format = require('./format.js')
export default {
    name: 'story',
    components: {
        Navbar, Sidebar, Footere
    },
    data() {
        return {
            rawContent: {},
            content: {},
            'title': ""
        }
    },
    computed: {
    },
    methods: {

    },
    created() {
        let _this = this
        Prismic.api("//coltalb.prismic.io/api").then(function (api) {
            api.query(
                Prismic.Predicates.at('my.stories.uid', _this.$route.params.id)
            ).then(function (pageContent) {
                console.log(pageContent)
                console.log("!!!!!")
                if (pageContent.results.length == 0)
                    return _this.$router.replace('/404')

                var doc = pageContent.results[0]
                _this.title = doc.data['stories.title'].value[0][store.state.lang].value
                var group = doc.getGroup('stories.content').toArray()
                _this.content = format.formatArray(group[0].getStructuredText(store.state.lang))
            });

        })
    }
}
</script>

<style>
.coltalb-content-narrow {
    padding: 0 30px 0 30px;
    max-width: 640px;
    margin: 0 auto;
}

.mdl-grid {
    padding: 0;
}

.coltalb-content-narrow-mobile {
    padding: 0 30px 0 30px;
    max-width: 640px;
    margin: 0 auto;
}

@media (max-width: 479px) {
    .coltalb-content-narrow-mobile {
        padding: 0;
        max-width: 640px;
        margin: 0 auto;
    }
}

p {
    font-family: 'Roboto', sans-serif;
}

.coltalb-dog-logo-image {
    height: 100px;
}

.coltalb-dog-first-image {
    width: 100%;
}

.image {
    height: 400px;
    background-color: black;
}
</style>