import Vue from 'vue'
import Router from 'vue-router'
import Login from '../views/Login.vue'
// import Lo from '../views/Lo.vue'
import Onemap from '../views/Onemap.vue'
Vue.use(Router)
export default new Router({
    routes: [{
            path: '/', //如果url为空，重定向到home页面
            redirect: '/onemap'
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        // {
        //     path: '/lo',
        //     name: 'Lo',
        //     component: Lo
        // },
        {
            path: '/onemap',
            name: 'onemap',
            // components: () =>
            //     import ('../views/Onemap.vue')
            component: Onemap,
        }
    ]
})