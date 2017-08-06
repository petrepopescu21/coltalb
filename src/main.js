var Prismic = require('prismic.io');
var regeneratorRuntime = require('regenerator-runtime')
var moment = require('moment');
var marked = require('marked')
require('../static/img/icons/favicon.ico')
import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import store from './store.js'

import App from './App.vue'
import Caini from './Caini.vue'
import Singlecaine from './Singlecaine.vue'
import NotFound from './NotFound.vue'
import NotFoundRedirect from './NotFoundRedirect.vue'
import Story from './Story.vue'
import Blog from './Blog.vue'
import BlogList from './BlogList.vue'
import BlogPost from './BlogPost.vue'
import 'vue-awesome/icons/facebook-official'
import 'vue-awesome/icons/instagram'
import 'vue-awesome/icons/twitter'
import 'vue-awesome/icons/calendar'
import 'vue-awesome/icons/expand'
import 'vue-awesome/icons/user-md'
import 'vue-awesome/icons/plus-square'
import 'vue-awesome/icons/calendar-o'
import Icon from 'vue-awesome/components/Icon.vue'
import VuePhotoSwipe from 'vue-photoswipe'
Vue.component('icon', Icon)
var VueCookie = require('vue-cookie');
// Tell Vue to use the plugin
Vue.use(VueCookie);
Vue.use(VuePhotoSwipe)
Vue.use(VueRouter)
// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// Vue.extend(), or just a component options object.
// We'll talk about nested routes later.
// const routes = [
//   { path: '/', components: {default: App} },
//   { path: '/caini', components: {default: Caini} }
// ]

// const router = new VueRouter({
//   routes: routes,
//   mode: "history"
// })

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [{
    path: '/',
    component: App
  },
  {
    path: '/caini',
    component: Caini,
    props: true
  },
  {
    path: '/caini/:id',
    component: Singlecaine
  },
  {
    path: '/404',
    component: NotFound
  },
  {
    path: '/blog',
    component: Blog,
    children: [
      {
        path: '',
        component: BlogList
      },
      {
        path: 'page/:page',
        component: BlogList
      },
      {
        path: ':id',
        component: BlogPost
      }
    ]
  },/*
  {
    path: '/blog/:id',
    component: Story,
    props: true
  },*/
  {
    path: '*',
    component: NotFoundRedirect
  }
  ]
})

const app = new Vue({
  el: "#app",
  router: router,
  data: {
    rawlabels: [],
    unprocessedDogs: [],
    dogs: [],
    stories: [],
    filters: {
      size: {
        s: false,
        m: false,
        l: false
      },
      age: {
        '1': false,
        '2': false,
        '3': false
      },
      sex: {
        f: false,
        m: false
      }
    }
  },
  computed: {
    lang() {
      return store.state.lang
    },
    labels() {
      return store.state.labels
    },
    ready() {
      if (this.dogs.length > 0)
        return true
      else return false
    }
  },
  methods: {
    updateLang() {
      this.dogs = processDogs(this.unprocessedDogs, store.state.lang)
    },
    setLang(lng) {
      store.commit('updateLang', lng.lang)
    }
  },
  watch: {
    lang: function (x) {
      this.$cookie.delete('lang')
      this.$cookie.set('lang', x, 30)
      if (this.dogs.length > 0)
        this.updateLang()
      store.commit('setLabels', this.rawlabels[x])
    }
  },
  template: '<router-view v-if="ready" class="view" :dogs="dogs" :stories="stories" :filters="filters"></router-view>',
  created: function () {
    var cookieLang = this.$cookie.get('lang')
    if (typeof cookieLang == "string") {
      this.setLang({
        'lang': cookieLang
      })
    } else
      axios.get('//freegeoip.net/json/').then((res) => {
        //Get country code of request IP
        var cc = res.data.country_code
        if (cc == "RO")
          this.setLang({
            lang: 'ro'
          })
        else if (cc == "DE" || cc == "AT")
          this.setLang({
            lang: 'de'
          })
        else
          this.setLang({
            lang: 'en'
          })
      })
    var _this = this
    Prismic.api("//coltalb.prismic.io/api").then(function (api) {
      api.query(Prismic.Predicates.at('document.type', 'labels')).then(function (data) {
        _this.rawlabels = processLabels(data)
        store.commit('setLabels', _this.rawlabels[_this.lang])
      })
      api.query(Prismic.Predicates.at('document.type', 'dogs')).then(function (data) {
        _this.unprocessedDogs = data
        _this.dogs = processDogs(data, _this.lang)
      })
      api.query(Prismic.Predicates.at('document.type', 'stories')
      ).then(function (data) {
        data.results.forEach((item) => {
          var group = item.getGroup('stories.content').toArray();
        })
        _this.stories = processStories(data)
      })
    })


  },
  updated: function () {
    componentHandler.upgradeDom()
  },
  activated: function () {
    componentHandler.upgradeDom()
  }
})

function processStories(data) {
  var returnable = []
  data.results.forEach((item) => {
    returnable.push({
      uid: item.uid,
      title: item.data["stories.title"],
      rawcontent: item.data["stories.content"]
    })
  })
  return returnable
}

function processLabels(data) {
  var returnable = {}
  returnable['ro'] = {}
  returnable['en'] = {}
  returnable['de'] = {}
  var temp = data.results[0].data
  for (var key in temp) {
    if (!temp.hasOwnProperty(key)) continue;

    let obj = temp[key];
    returnable['ro'][key.split('.')[1]] = obj.value.split('|')[0]
    returnable['en'][key.split('.')[1]] = obj.value.split('|')[1]
    returnable['de'][key.split('.')[1]] = obj.value.split('|')[2]
  }
  return returnable;
}

function processDogs(data, lang) {
  var returnable = []
  data.results.forEach((item) => {
    var output = {}
    if (item.uid) output.uid = item.uid

    if (item.data['dogs.name'])
      output.name = item.data['dogs.name'].value
    else
      output.name = ""

    if (item.data['dogs.birthdate']) {
      output.birthdate = item.data['dogs.birthdate'].value
      var a = moment()
      var b = moment(output.birthdate)

      var age = a.diff(b, 'months')
      if (age < 12)
        output.age = 1
      if (age >= 12 && age <= 30)
        output.age = 2
      if (age > 30)
        output.age = 3
    } else {
      output.birthdate = ""
      output.age = 0
    }
    if (item.data['dogs.status']) {
      if (item.data['dogs.status'].value == "adoptat")
        output.status = 1
      else if (item.data['dogs.status'].value == "rezervat")
        output.status = 2
      else output.status = 0
    }
    else output.status = 0
      
    if (item.data['dogs.sex'])
      output.sex = item.data['dogs.sex'].value
    else
      output.sex = "N/A"

    if (item.data['dogs.sort'])
      output.sort = item.data['dogs.sort'].value
    else output.sort = 0

    if (item.data['dogs.size'])
      output.size = item.data['dogs.size'].value
    else
      output.size = "N/A"

    if (item.data['dogs.description']) {
      output.description = item.data['dogs.description'].value[0]
      for (var k in output.description)
        if (lang === k) {
          output.description = nl2br(output.description[k].value)
        }
    } else
      output.description = ""
    if (item.data['dogs.restrictii']) {
      output.restrictii = item.data['dogs.restrictii'].value[0]
      for (var k in output.restrictii)
        if (lang === k) {
          output.restrictii = output.restrictii[k].value
        }
    } else
      output.restrictii = "-"

    if (item.data['dogs.dataadapost']) {
      output.dataadapost = item.data['dogs.dataadapost'].value
    } else
      output.dataadapost = "N/A"

    if (item.data['dogs.castrat']) {
      output.castrat = item.data['dogs.castrat'].value
    } else
      output.castrat = "N/A"
    if (item.data['dogs.long-description']) {
      output.longdescription = item.data['dogs.long-description'].value[0]
      for (var k in output.longdescription)
        if (lang === k) {
          output.longdescription = marked(output.longdescription[k].value, {
            sanitize: true
          })
        }
    } else
      output.longdescription = ""

    output.images = []
    output.frontimages = []
    output.largeimages = []
    if (item.data['dogs.gallery']) {
      item.data['dogs.gallery'].value.forEach((image) => {
        output.images.push({
          src: image.image.value.main.url,
          w: parseInt(image.image.value.main.dimensions.width),
          h: parseInt(image.image.value.main.dimensions.height)
        })
        if (image.image.value.views['front'])
          output.frontimages.push({
            src: image.image.value.views['front'].url,
            w: parseInt(image.image.value.views['front'].dimensions.width),
            h: parseInt(image.image.value.views['front'].dimensions.height)
          })
        if (image.image.value.views['square'])
          output.largeimages.push({
            src: image.image.value.views['square'].url,
            w: parseInt(image.image.value.views['square'].dimensions.width),
            h: parseInt(image.image.value.views['square'].dimensions.height)
          })

      })
    } else
      output.images.push("images/nodog.jpg")



    /*
    output.images256=[]
    item.data['dogs.gallery'].value.forEach((image)=>{
        output.images256.push(image.image.value.views['256'].url)
    })
    output.images512=[]
    item.data['dogs.gallery'].value.forEach((image)=>{
        output.images512.push(image.image.value.views['512'].url)
    })*/
    returnable.push(output)
  })
  returnable.sort((a, b) => {
    return b.sort > a.sort
  })

  return returnable
}

function nl2br(str) {
  var breakTag = '<br />';
  return (str + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1' + breakTag + '$2');
}

function remtag(str) {

}
