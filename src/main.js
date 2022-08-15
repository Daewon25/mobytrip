import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import vSelect from 'vue-select'
import VueViewer from 'v-viewer'
import * as VueGoogleMaps from 'vue2-google-maps'
Vue.use(VueGoogleMaps, {
  load: {
    key: process.env.VUE_APP_GOOGLE_KEY,
    libraries: 'places',
  },
})
import 'viewerjs/dist/viewer.css'
Vue.use(VueViewer)
Vue.component('v-select', vSelect)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
