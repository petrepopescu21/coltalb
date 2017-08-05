<template>
<div class="mdl-cell mdl-cell--3-col mdl-cell--4-col-tablet mdl-cell--4-col-phone mdl-card mdl-shadow--3dp">
              <div class="mdl-card__media">
                <img :src=this.data.frontimages[0].src />
              </div>
              <div class="mdl-card__title">
                <h4 class="mdl-card__title-text">{{this.data.name}}</h4>
              </div>
              <div class="mdl-card__supporting-text">
                <span class="mdl-typography--font-light mdl-typography--subhead" v-html="this.data.description"></span>
              </div>
              <div class="mdl-card__actions">
                <router-link to="/caini" class="coltalb-link mdl-button mdl-js-button mdl-typography--text-uppercase">
                   {{labels.vezitoticainii}}
                   <i class="material-icons">chevron_right</i>
                 </router-link>
              </div>
            </div>
</template>

<script>
import store from './store'
export default {
  name: 'doggo',
  props: ['data'],
  computed: {
    labels () {
      return store.state.labels
    }
  }
}
</script>

<style scoped>
  .mdl-card__supporting-text {
    text-align: left;
  }
</style>