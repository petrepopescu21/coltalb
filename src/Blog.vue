<template>
    <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <navbar></navbar>
        <sidebar></sidebar>
        <div class="mdl-layout__content">
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