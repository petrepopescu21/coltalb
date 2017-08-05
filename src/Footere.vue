<template>
<footer class="coltalb-footer mdl-mega-footer">
          <div class="mdl-mega-footer--top-section">
            <div class="mdl-mega-footer--left-section">
              <button class="mdl-mega-footer--social-btn"><icon class="social-icon" name="facebook-official"></icon></button> &nbsp;
              <button class="mdl-mega-footer--social-btn"><icon class="social-icon" name="instagram"></icon></button> &nbsp;
              <button class="mdl-mega-footer--social-btn"><icon class="social-icon" name="twitter"></icon></button>
            </div>
            <div class="mdl-mega-footer--right-section">
              <a class="mdl-typography--font-light" href="#top">
                Back to Top
                <i class="material-icons">expand_less</i>
              </a>
            </div>
          </div>

          <div class="mdl-mega-footer--middle-section">
            <p class="mdl-typography--font-light">{{labels.fundatiacoltalb}} © 2017</p>
            <p class="mdl-typography--font-light">Some dogs may cause uncontrollable act of kindness</p>
          </div>

          <div class="mdl-mega-footer--bottom-section">
            <a class="coltalb-link coltalb-link-menu mdl-typography--font-light" id="version-dropdown">
              {{labels.parteneri}}
              <i class="material-icons">arrow_drop_up</i>
            </a>
            <ul class="mdl-menu mdl-js-menu mdl-menu--top-left mdl-js-ripple-effect" for="version-dropdown">
              <li class="mdl-menu__item">Primul partener</li>
              <li class="mdl-menu__item">Alt partener</li>
            </ul>
            <a class="coltalb-link coltalb-link-menu mdl-typography--font-light" id="developers-dropdown">
              {{labels.sponsori}}
              <i class="material-icons">arrow_drop_up</i>
            </a>
            <ul class="mdl-menu mdl-js-menu mdl-menu--top-left mdl-js-ripple-effect" for="developers-dropdown">
              <li class="mdl-menu__item">Sponsorul</li>
            </ul>
            <a class="coltalb-link mdl-typography--font-light" href="">{{labels.blog}}</a>
            <a class="coltalb-link mdl-typography--font-light" href="">{{labels.legal}}</a>
          </div>

        </footer>
    </template>

<script>

import store from './store'
    export default {
        name: 'footere',
        computed: {
          labels () {
            return store.state.labels
          }
        }
    }
</script>

<style scoped>
  .social-icon {
    color: #fff;
    font-size: 28px;
  }

  .fa-icon {
  width: auto;
  height: 1em; /* or any other relative font sizes */
}
</style>
