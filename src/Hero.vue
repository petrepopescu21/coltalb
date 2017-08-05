<template>


<div class="coltalb-be-together-section mdl-typography--text-center">
        <div class="recenter">
          <img class="logo-image" src="./assets/colt_alb_alb.png" />
          <div class="logo-font coltalb-slogan">{{labels.titlu1}}<br>{{labels.titlu2}}</div>
        </div>
        <!--<div class="logo-font coltalb-sub-slogan">Patrupezi fară pereche.</div>-->
        <a href="#screens">
          <button class="coltalb-fab mdl-button mdl-button--colored mdl-js-button mdl-button--fab mdl-js-ripple-effect">
              <i class="material-icons">expand_more</i>
            </button>
        </a>
      </div>
</template>

<script>
    import store from './store'
    export default {
        name: 'hero',
        computed: {
            labels () {
                return store.state.labels
            }
        }
    }
</script>