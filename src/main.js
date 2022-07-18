// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

import axios from "axios";
Vue.prototype.$axios = axios

import SuperMapCesium from 'vue-cesium-supermap'
Vue.use(SuperMapCesium, {
    cesiumPath: 'https://lauxb.github.io/vue-cesium-supermap/Cesium'
})

import '@supermap/vue-iclient3d-webgl/dist/styles/vue-iclient3d-webgl.min.css'
import VueiClient from '@supermap/vue-iclient3d-webgl';
Vue.use(VueiClient);
// var axios = require('axios')
// axios.defaults.baseURL = 'http://localhost:7777'
Vue.use(VueRouter)
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
    // el: '#app',
    router,
    render: h => h(App)
        // components: { App },
        // template: '<App/>'
}).$mount('#app')