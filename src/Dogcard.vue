<template>

    <router-link  v-bind:to="'/caini/'+data.uid" class="mdl-cell mdl-cell--3-col mdl-cell--12-col-phone mdl-cell--4-col-tablet">
        <div class="demo-card-square mdl-card mdl-shadow--2dp">
          <div class="mdl-card__title mdl-card--expand" v-bind:style="{'background-size': 'cover', 'background-image': 'url('+data.largeimages[0].src+')'}">
            
          </div>
          
          <div class="mdl-card__supporting-text">
          <h2 class="mdl-card__title-text text-lowlightx">{{data.name}}</h2>
         
          </div>
          <div class="mdl-card__actions mdl-card--border">
            <div class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
          {{labels.viewdog}}
        </div>
          </div>
        </div>
      </router-link>
</template>

<script>
    import store from './store'
    export default {
        name: "dogcard",
        props: {
            data:{}
        },
        data () {
            return {
                style: {}
            }
        },
        computed: {
            labels () {
                return store.state.labels
            }
        }
    }   
</script>

<style scoped>
.text-lowlightx {
    font-weight: 400;
}

a {
    text-decoration: none;
}
</style>