<template>
<div v-if="dog" class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
    <navbar></navbar>
    <sidebar></sidebar> 
    <div class="mdl-layout__content">
        <div class="coltalb-content-narrow ">
            <img class="coltalb-dog-logo-image" src="./assets/colt_alb_negru.png"><h1>{{dog.name}}</h1>
            <h4 v-html="dog.description"></h4>
        </div>
        <div class="coltalb-content-narrow-mobile">
                <div class="mdl-grid">
                <div class="mdl-cell mdl-cell--12-col"><img class="preview-img-item coltalb-dog-first-image" v-bind:src="dog.largeimages[0].src" v-on:click="$photoswipe.open(0, dog.images)"></img></div>
                <div class="mdl-cell mdl-cell--4-col mdl-cell--2-col-phone" v-bind:key="index" v-for="(item,index) in dog.largeimages" v-if="index!=0">
                        <img class="preview-img-item coltalb-dog-first-image" v-bind:src="item.src" v-on:click="$photoswipe.open(index, dog.images)"></img>
                </div>
                </div>
        </div>
        <div class="coltalb-content-narrow ">
                <h4>{{subtitle}}</h4>
                <div v-html="dog.longdescription"></div>  
        </div>
        <div class="coltalb-content-narrow">
            <h4>{{labels.detalii}}</h4>
            <ul class="demo-list-two mdl-list">
  <li class="mdl-list__item mdl-list__item--two-line">
    <span class="mdl-list__item-primary-content">
      <icon class="material-icons mdl-list__item-avatar" name="expand"></icon> 
      <span>{{labels.talie}}</span>
      <span class="mdl-list__item-sub-title">{{labels[sizelabel]||"N/A"}}</span>
    </span>
    
  </li>
    <li class="mdl-list__item mdl-list__item--two-line">
    <span class="mdl-list__item-primary-content">
      <icon class="mdl-list__item-avatar" scale="1" name="calendar"></icon>  
      <span>{{labels.varsta}}</span>
      <span class="mdl-list__item-sub-title">{{labels[agelabel]}}</span>
    </span>
    
  </li>
  </li>
    <li class="mdl-list__item mdl-list__item--two-line">
    <span class="mdl-list__item-primary-content">
      <icon class="mdl-list__item-avatar" scale="1" name="user-md"></icon>  
      <span>{{labels.castrat}}</span>
      <span class="mdl-list__item-sub-title">{{labels[dog.castrat]||"N/A"}}</span>
    </span>
    
  </li>
  <li class="mdl-list__item mdl-list__item--two-line">
    <span class="mdl-list__item-primary-content">
      <icon class="mdl-list__item-avatar" scale="1" name="plus-square"></icon>  
      <span>{{labels.restrictii}}</span>
      <span class="mdl-list__item-sub-title">{{dog.restrictii}}</span>
    </span>
    
  </li>
  <li class="mdl-list__item mdl-list__item--two-line">
    <span class="mdl-list__item-primary-content">
      <icon class="mdl-list__item-avatar" scale="1" name="calendar-o"></icon>  
      <span>{{labels.dataadapost}}</span>
      <span class="mdl-list__item-sub-title">{{dog.dataadapost}}</span>
    </span>
    
  </li>
  </ul>
        </div>
        <footere></footere>
    </div>
</div>
</template>


<script>
import store from './store.js'
import Footere from './Footere.vue'    
import Navbar from './Navbar.vue'
import Sidebar from './Sidebar.vue'

    export default {
        name: "singlecaine",
        
        components: {
            Navbar,Sidebar,Footere
        },
        props: {
            dogs: {}
        },
        computed: {
            subtitle: function() {
                return store.state.labels.storyof.replace("%",this.dog.name)
            },
            dog: function () {
                if(this.dogs) {
                    
                let found = false
                 for (var i = 0, len = this.dogs.length; i < len; i++) {
                    if(this.$route.params.id==this.dogs[i].uid) {
                      return this.dogs[i]
                      found = true
                    }
                    if (i==this.dogs.length-1 && found == false)
                        return this.$router.replace('/404') 
                    }
                }
                
            },
            labels () {
                
                return store.state.labels
            },
            sizelabel () {
                if(this.dog.size=="S")
                    return "mica"
                if(this.dog.size=="M")
                    return "medie"
                if(this.dog.size=="L")
                    return "mare"
            },
            agelabel () {
                if(this.dog.age==1)
                    return "pui"
                if(this.dog.age==2)
                    return "tineri"
                if(this.dog.age==3)
                    return "adulti"
            }
        }
    }   
</script>

<style scoped>
.coltalb-content-narrow {
    padding: 0 30px 0 30px;
    max-width: 640px;
    margin: 0 auto;
}

.mdl-list__item-avatar {
    border-radius: 0%;
    padding: 10px;
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