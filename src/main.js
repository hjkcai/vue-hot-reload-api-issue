import Vue from 'vue'
import App from './App'
import * as ModalDialogs from 'vue-modal-dialogs'

Vue.config.productionTip = false
Vue.use(ModalDialogs)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
