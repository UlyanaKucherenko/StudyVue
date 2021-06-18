import './styles/style.scss'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Paginate from 'vuejs-paginate'
createApp(App).component('paginate', Paginate)


createApp(App).use(store).use(router).mount('#app')