import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Bootstrap
import * as bootstrap from 'bootstrap/dist/js/bootstrap.min'

// import scss
import '@/assets/scss/main.scss'

createApp(App)
    .use(router)
    .use(bootstrap)
    .mount('#app')
