<template>
    <div class="">
        <router-link class="mdl-navigation__link" to="/">{{labels.desprenoi}}</router-link>
        <router-link class="mdl-navigation__link" to="/caini">{{labels.adopta}}</router-link>
        <router-link class="mdl-navigation__link" to="/">{{labels.contact}}</router-link>
    </div>
</template>

<script>
    import store from './store'
    export default {
        name: "links",
        computed: {
          labels () {
            return store.state.labels
          },
          lang () {
              return store.state.lang
          }
        },
    }
</script>

<style scoped>
    .lang-selector {
        float: left;
        padding-right: 0 !important;
    }
</style>