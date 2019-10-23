import VueRouter from 'vue-router'

import hotel from './main/Hotel.vue'
import goodslist from './main/GoodsList.vue'

var router = new VueRouter({
    routes: [
        { path: '/hotel', component: hotel },
        { path: '/goodslist', component: goodslist }
    ]
})

export default router 