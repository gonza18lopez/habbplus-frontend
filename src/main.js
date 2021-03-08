import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import axios from 'axios'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

import mitt from 'mitt'

import './registerServiceWorker'
import router from './router'
import store from './store'
import messages from './lang'

/**
 * Import Axios
 */
window.axios = axios.create()

/**
 * Bootstrap Framework
 */
import 'bootstrap';

/**
 * Register Font Awesome components
 */
library.add(fas, far, fab)

/**
 * Create Vue App
 */
let app = createApp(App)

/**
 * Create Event Bus
 */
app.config.globalProperties.bus = mitt()

/**
 * Create i18n instance
 */
const i18n = createI18n({
	locale: 'fr',
	fallbackLocale: 'en',
	messages
})

/**
 * Router 404 Handling
 */
router.beforeResolve(to => {
	try {
		let resolve = router.resolve(to.path)
	
		if ( !resolve.matched.length )
			throw {
				code: 404,
				title: i18n.global.t('router.404.title'),
				message: i18n.global.t('router.404.description')
			}
	}
	catch (error) {
		router.push({ name: 'Home' })
		
		app.config.globalProperties.bus.emit('router-error', error)
	}
})

/**
 * Mount Application
 */
app
	.use(store)
	.use(router)
	.use(i18n)
	.component('fa', FontAwesomeIcon)
	.mount('#app')
