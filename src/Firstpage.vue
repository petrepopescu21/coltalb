<template>

    <div class="coltalb-screen-section mdl-typography--text-center">
        <div class="mdl-typography--display-1-color-contrast">Salut, om cu inimă mare. Bine ai venit.</div>
        <div class="mdl-grid">
          <p class="mdl-cell--12-col mdl-typography--headline mdl-typography--font-thin">
            Cățeii de la noi sunt în tranziție. Ajută-i să-și găsească destinația, iar ei te vor ajuta să îți găsești liniștea și fericirea.

          </p>
          <div class="mdl-cell--12-col coltalb-flex-center">
            <button class="coltalb-flex-cta mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">{{labels.adoptauncatel}}</button>
            <button class="coltalb-flex-cta mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">{{labels.implicatelaadapost}}</button>
            <button class="coltalb-flex-cta mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">{{labels.doneazaladistanta}}</button>
            <button class="coltalb-flex-cta mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">{{labels.adoptatemporar}}</button>
          </div>
          <!-- end grid -->
        </div>
        <div class="coltalb-wear-section">
          <div class="coltalb-wear-band">
            <div class="coltalb-wear-band-text">
              <div class="mdl-typography--display-2 mdl-typography--font-thin">Nu știi cum e viața cu un câine?</div>
              <p class="mdl-typography--headline mdl-typography--font-thin">
                Adoptă-l temporar și convinge-te!<br>
                Cățelul va sta la tine până îi găsim o familie adoptivă.
              </p>
              <p>
                <a class="mdl-typography--font-regular mdl-typography--text-uppercase coltalb-alt-link" href="">
                  {{labels.alegecatel}}<i class="material-icons">chevron_right</i>
                </a>
              </p>
            </div>
          </div>
        </div>
        <div class="coltalb-customized-section">
          <div class="coltalb-customized-section-text">
            <div class="mdl-typography--font-light mdl-typography--display-1-color-contrast">Vrei să ajuți, dar nu poți lua un câine acasă? </div>
            <p class="mdl-typography--font-light mdl-typography--headline-color-contrast">
              Vino tu la adăpost și dă-ne o mână de ajutor!
              <br>
              Cățeii noștri abia așteaptă să fie mângăiați, plimbați și hrăniți.
            </p>
          </div>
          <div class="coltalb-customized-section-image"></div>
        </div>
        <div class="coltalb-more-section">
          <div class="coltalb-section-title mdl-typography--display-1-color-contrast">Vezi cuticii nostri</div>
          <div class="coltalb-card-container mdl-grid">
            <doggo v-for="dog in fourDogs" v-bind:data="dog" :key="dog.uid"></doggo>

          </div>
        </div>
        </div>
</template>

<script>
    import Doggo from './Doggo.vue'
    import store from './store'
    export default {
        name: 'firstpage',
        components: {Doggo},
        props: {
          dogs: {}
        },
        computed: {
          labels () {
            return store.state.labels
          },
          fourDogs: function() {
            return this.dogs.slice(0,4)
          }
        }
    }
</script>

<style scoped>
  .coltalb-customized-section-text {
    max-width: 800px;
  }
</style>