import Vue from 'vue'
import component from './component'

export default Vue.extend({
  extends: component,
  methods: {
    test () {
      alert('test!')
    }
  }
})