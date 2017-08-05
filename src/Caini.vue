<script src="https://code.getmdl.io/1.3.0/material.min.js" defer></script>
<script>
import Navbar from './Navbar.vue'
import Filterbar from './Filterbar.vue'
import Footere from './Footere.vue'
import Dogcard from './Dogcard.vue'
import store from './store.js'
export default {
  name: 'caini',
  components: {
    Navbar,Filterbar,Footere,Dogcard
  },
  props: {
      dogs: {},
      filters: {},
      pagefound: true
  },
  computed: {
          lang () {
            return store.state.lang
          },
          sizeFilters: function () {
            return (this.filters.size.s == false &&
              this.filters.size.m == false &&
              this.filters.size.l == false)
          },
          ageFilters: function () {
            return (
              this.filters.age['1'] == false &&
              this.filters.age['2'] == false &&
              this.filters.age['3'] == false)
          },
          sexFilters: function () {
            return (
              this.filters.sex.m == false &&
              this.filters.sex.f == false
            )
          },
          filteredDogs: function () {
            var _this = this;
            var retVal = [];
            if (this.sizeFilters === true && this.ageFilters === true && this.sexFilters === true)
              return this.dogs
            else {
              for (var i = 0; i < _this.dogs.length; i++) {
                if (
                  (_this.dogs[i].age == 0 || this.ageFilters === true || this.filters.age[_this.dogs[i].age] === true)
                  &&
                  (_this.dogs[i].size == "N/A" || this.sizeFilters === true || this.filters.size[_this.dogs[i].size.toLowerCase()] === true)
                  &&
                  (_this.dogs[i].sex == "N/A" || this.sexFilters === true || this.filters.sex[_this.dogs[i].sex.toLowerCase()] === true))

                  retVal.push(_this.dogs[i])
              }
              return retVal;
            }

          }
        },
  created: function() {
      
  }
}
</script>

<template>
  <div class="mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header">
    <navbar></navbar>
    <filterbar :filters="filters"></filterbar>
    <div class="coltalb-content mdl-layout__content">
    <a name="top"></a>
          <div class="page-content">

            <div class="mdl-grid">
              <dogcard v-for="dog in filteredDogs" v-bind:data="dog" :key="dog.uid">
              </dogcard>
            </div>

          </div>
    <footere></footere>
    </div>
    
  </div>
</template>
