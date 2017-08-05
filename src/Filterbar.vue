<template>

      <div class="mdl-layout__drawer coltalb-drawer">
        <span class="mdl-layout-title coltalb-logo-small">
          <img class="coltalb-logo-image" src="./assets/colt_alb_alb.png">
         
        </span>
        
        <nav class="mdl-navigation" style="padding: 10px;">
        <links></links>
        <div class="coltalb-drawer-separator"></div>

        <h4>{{labels.filterdogs}}</h4>
        
        
         <!--
              <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label "  style="max-width: 100%">
                <input class="mdl-textfield__input" type="text" id="sample3">
                <label class="mdl-textfield__label" for="sample3">Search</label>
              </div>-->
              <ul class="demo-list-item mdl-list">
                <li class="mdl-list__item">
                  {{labels.varsta}}
                </li>
                <li class="mdl-list__item"><label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="checkbox-1">
  <input type="checkbox" id="checkbox-1" v-model="filters.age['1']" class="mdl-checkbox__input">
  <span class="mdl-checkbox__label">{{labels.pui}}</span>
</label>
                </li>
                <li class="mdl-list__item">
                  <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="checkbox-2">
  <input type="checkbox" id="checkbox-2" v-model="filters.age['2']" class="mdl-checkbox__input">
  <span class="mdl-checkbox__label">{{labels.tineri}}</span>
</label>
                </li>
                <li class="mdl-list__item"><label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="checkbox-3">
  <input type="checkbox" id="checkbox-3" v-model="filters.age['3']" class="mdl-checkbox__input">
  <span class="mdl-checkbox__label">{{labels.adulti}}</span>
</label>

                </li>
              </ul>
              <ul class="demo-list-item mdl-list">
                <li class="mdl-list__item">
                  {{labels.talie}}
                </li>
                <li class="mdl-list__item"><label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="checkbox-4">
  <input type="checkbox" id="checkbox-4" v-model="filters.size.s" class="mdl-checkbox__input">
  <span class="mdl-checkbox__label">{{labels.mica}}</span>
</label>
                </li>
                <li class="mdl-list__item">
                  <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="checkbox-5">
  <input type="checkbox" id="checkbox-5" v-model="filters.size.m" class="mdl-checkbox__input">
  <span class="mdl-checkbox__label">{{labels.medie}}</span>
</label>
                </li>
                <li class="mdl-list__item"><label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="checkbox-6">
  <input type="checkbox" id="checkbox-6" v-model="filters.size.l" class="mdl-checkbox__input">
  <span class="mdl-checkbox__label">{{labels.mare}}</span>
</label>

                </li>
              </ul>
              <ul class="demo-list-item mdl-list">
                <li class="mdl-list__item">
                  {{labels.sex}}
                </li>
                <li class="mdl-list__item"><label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="checkbox-7">
  <input type="checkbox" id="checkbox-7" v-model="filters.sex.m" class="mdl-checkbox__input">
  <span class="mdl-checkbox__label">M</span>
</label>
                </li>
                <li class="mdl-list__item">
                  <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="checkbox-8">
  <input type="checkbox" id="checkbox-8" v-model="filters.sex.f" class="mdl-checkbox__input">
  <span class="mdl-checkbox__label">F</span>
</label>
                </li>
              </ul>
        </nav>
        </div>
</template>

<script>
import store from './store.js'
import Links from './Links.vue' 
    export default {
        name: 'filterbar',
        props: {
            filters:{}
        },
        computed: {
          labels () {
            return store.state.labels
          }
        },
        components: {Links}
    }
</script>

<style scoped>
  .mdl-list__item {
        padding: 0 16px 0 16px;
  }

  h4 {
    text-align: center;
    margin: 16px 0 16px;
  }
</style>