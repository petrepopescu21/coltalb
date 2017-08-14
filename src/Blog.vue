<template>
    <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <navbar></navbar>
        <sidebar></sidebar>
        <div class="mdl-layout__content">
            <div class="coltalb-content-narrow ">
                <img class="coltalb-dog-logo-image" src="./assets/colt_alb_negru.png">
                <h1>Blog</h1>
            </div>
            <div class="coltalb-content-narrow ">
                <router-view></router-view>
            </div>
            <footere></footere>
        </div>
    
    </div>
</template>

<script>

import Footere from './Footere.vue'
import Navbar from './Navbar.vue'
import Sidebar from './Sidebar.vue'
import store from './store.js'
export default {
    name: 'blog',
    components: {
        Navbar, Sidebar, Footere
    },
    created() {
    }
}
</script>

<style>

.coltalb-dog-logo-image {
  height: 100px;
}

.coltalb-content-narrow {
    padding: 0 30px 0 30px;
    max-width: 640px;
    margin: 0 auto;
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
</style>