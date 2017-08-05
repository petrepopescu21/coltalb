<template>
  <div class="coltalb-header mdl-layout__header mdl-layout__header--waterfall" id="navbar">
    <div class="mdl-layout__header-row">
      <span class="coltalb-title mdl-layout-title">
        <!--<img class="coltalb-logo-image" src="images/coltalb-logo.png">-->
      </span>
      <div class="x">
        <button id="demo-menu-lower-right" class="clean-button mdl-navigation__link mdl-typography--text-uppercase" v-html='lang'></button>
        <ul class="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect" for="demo-menu-lower-right">
          <li v-on:click="setLangState('ro')" v-bind:class="{'mdl-button--accent': lang=='ro'}" class="mdl-menu__item">RO</li>
          <li v-on:click="setLangState('de')" v-bind:class="{'mdl-button--accent': lang=='de'}" class="mdl-menu__item">DE</li>
          <li v-on:click="setLangState('en')" v-bind:class="{'mdl-button--accent': lang=='en'}" class="mdl-menu__item">EN</li>
        </ul>
      </div>
      <!-- Add spacer, to align navigation to the right in desktop -->
      <div class="coltalb-header-spacer mdl-layout-spacer"></div>
      <div class="coltalb-navigation-container">
        <nav class="coltalb-navigation mdl-navigation">
  
          <a class="mdl-navigation__link mdl-typography--text-uppercase" to="/">{{labels.contact}}</a>
          <router-link class="mdl-navigation__link mdl-typography--text-uppercase" to="/">{{labels.desprenoi}}</router-link>
          <router-link class="mdl-navigation__link mdl-typography--text-uppercase" to="/caini">{{labels.adopta}}</router-link>
          <button class="mdl-button mdl-js-button mdl-button--raised mdl-button--accent">{{labels.doneaza}}</button>
          <button id="demo-menu-lower-right1" class="clean-button mdl-navigation__link mdl-typography--text-uppercase" v-html='lang'>
  
          </button>
  
          <ul class="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect" for="demo-menu-lower-right1">
            <li v-on:click="setLangState('ro')" v-bind:class="{'mdl-button--accent': lang=='ro'}" class="mdl-menu__item">RO</li>
            <li v-on:click="setLangState('de')" v-bind:class="{'mdl-button--accent': lang=='de'}" class="mdl-menu__item">DE</li>
            <li v-on:click="setLangState('en')" v-bind:class="{'mdl-button--accent': lang=='en'}" class="mdl-menu__item">EN</li>
          </ul>
        </nav>
      </div>
  
    </div>
  </div>
</template>


<script>
import store from './store.js'
export default {
  name: 'navbar',
  props: {

  },
  computed: {
    lang() {
      return store.state.lang
    },
    labels() {
      return store.state.labels
    }
  },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    }
  },
  methods: {
    setLangState(lng) {
      store.commit('updateLang', lng)
    }
  }
}
</script>

<style>

.coltalb-header .mdl-menu__container {
  z-index: 50;
  margin: 0 !important;
}

.coltalb-header {
  overflow: visible;
  background-color: white;
}

.coltalb-header .material-icons {
  color: #767777 !important;
}

.coltalb-header .mdl-layout__drawer-button {
  background: transparent;
  color: #767777;
}

.coltalb-header .mdl-navigation__link {
  color: #757575;
  font-weight: 700;
  font-size: 14px;
}

.x {
  width: 100%;
  direction: rtl;
}

.clean-button {
  background: none;
  border: 0;
}

@media (min-width: 1024px) {
  .x {
    display: none;
  }

  .clean-button {
    margin-bottom: 4px;
  }
}
</style>