import { createApp, VueElement } from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import {fab,faTwitter} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import "bootstrap/dist/css/bootstrap.css"

library.add(fab,fas,faTwitter)

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')

import "bootstrap/dist/js/bootstrap.js"