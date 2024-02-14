import App from './App'

// #ifndef VUE3
import Vue from 'vue'
import uView from 'uview-ui'
import './uni.promisify.adaptor'
import request from 'utils/requestff.js'
import md5 from 'utils/md5.js'
import baseurl from 'httpconfig.js'
import base64 from 'utils/base64.js'
//引入vuex 并且挂载到vue实例上
import store from "./store/index.js"
import mapchange from "utils/mapchange.js"
import apiConfig from 'httpconfig.js'

Vue.config.productionTip = false
Vue.prototype.$request=request
Vue.prototype.$md5=md5
Vue.prototype.$baseurl=baseurl
Vue.prototype.$base64=base64
Vue.prototype.$store = store
Vue.prototype.$mapChange=mapchange
Vue.prototype.$tpurl=apiConfig.tp.Url

Vue.prototype.$naforceUpdate = function() {
      const currentPages = getCurrentPages();
      const currentPage = currentPages[currentPages.length - 1];
      uni.navigateTo({
        url: `/${currentPage.route}`
      });
    };
Vue.prototype.$swforceUpdate = function() {
    };

Vue.use(uView)
uni.$u.config.unit = 'rpx'
App.mpType = 'app'
const app = new Vue({
  ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif

