import $ from 'jquery'
import './css/index.css'
import 'bootstrap/dist/css/bootstrap.css'
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import router from './router.js'
import app from './App.vue'

var vm = new Vue({
    el: '#app',
    render: c => c(app),
    router: router

})
