<template>
  <div class="coltalb-drawer mdl-layout__drawer">
    <span class="mdl-layout-title coltalb-logo-small">
      <img class="coltalb-logo-image" src="./assets/colt_alb_alb.png">
  
    </span>
    <nav class="mdl-navigation">
      <links></links>
  
      <div class="coltalb-drawer-separator"></div>
  
    </nav>
  </div>
</template>

<script>
import Links from './Links.vue'
import store from './store'
export default {
  name: 'sidebar',
  components: { Links },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: {
    lang() {
      return store.state.lang
    },
    labels() {
      return store.state.labels
    }
  }
}
</script>