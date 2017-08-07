<template>
    <router-link v-bind:to="'/caini/'+data.uid" class="mdl-cell mdl-cell--3-col mdl-cell--12-col-phone mdl-cell--4-col-tablet">
        <div class="demo-card-square mdl-card mdl-shadow--2dp">
            <template v-if="data.status">
                <div class="ribbon ribbon-top-left">
                    <span v-if="data.status==1">{{labels.adoptat}}</span>
                    <span v-if="data.status==2">{{labels.rezervat}}</span>
                </div>
            </template>
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
        data: {}
    },
    data() {
        return {
            style: {}
        }
    },
    computed: {
        labels() {
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

.ribbon {
    width: 150px;
    height: 150px;
    overflow: hidden;
    position: absolute;
}

.ribbon::before,
.ribbon::after {
    position: absolute;
    z-index: -1;
    content: '';
    display: block;
    border: 5px solid #2980b9;
}

.ribbon span {
    position: absolute;
    display: block;
    width: 225px;
    padding: 15px 0;
    background-color: rgb(255, 64, 129);
    box-shadow: 0 5px 10px rgba(0, 0, 0, .1);
    color: #fff;
    text-shadow: 0 1px 1px rgba(0, 0, 0, .2);
    text-transform: uppercase;
    text-align: center;
}


/* top left*/

.ribbon-top-left {
    top: -10px;
    left: -10px;
}

.ribbon-top-left::before,
.ribbon-top-left::after {
    border-top-color: transparent;
    border-left-color: transparent;
}

.ribbon-top-left::before {
    top: 0;
    right: 0;
}

.ribbon-top-left::after {
    bottom: 0;
    left: 0;
}

.ribbon-top-left span {
    right: -25px;
    top: 30px;
    transform: rotate(-45deg);
}


.demo-card-square.mdl-card {
    width: 100%;
    height: 420px;
}
</style>