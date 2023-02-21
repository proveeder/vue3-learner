import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// import global css setup
import './assets/main.css'

// import bootstrap
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

// create vue app
const app = createApp(App)

app.use(router)

app.mount('#app')
