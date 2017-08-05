<template>
  <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
    <navbar></navbar>
    <sidebar></sidebar>
    <div class="coltalb-content mdl-layout__content">
      <div class="container">
        <img class="coltalb-dog-logo-image" src="./assets/colt_alb_negru.png" >
        <h3>Pagina nu a fost găsită</h3>
      </div>
      <footere></footere>
    </div>
  </div>
</template>

<script>
import Navbar from './Navbar.vue'
import Sidebar from './Sidebar.vue'
import Footere from './Footere.vue'
export default {
  name: 'notfound',
  components: {
    Navbar,Sidebar,Footere
  }
}
</script>

<style scoped>
  .container {
    height: calc(60vh);
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
  }

  h3 {
    margin-top: 60px;
    font-weight: 300;
  }

  .coltalb-dog-logo-image {
    width: 100px;
    margin: 0 auto;
    transform: rotate(45deg);
  }
  </style>