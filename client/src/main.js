import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Bootstrap
import * as bootstrap from 'bootstrap/dist/js/bootstrap.min'

//fontawesome
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

// import scss
import '@/assets/scss/main.scss'

createApp(App)
    .use(router)
    .use(bootstrap)
    .mount('#app')