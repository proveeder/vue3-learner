import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// import global css setup
import './assets/main.css'

// create vue app
const app = createApp(App)

app.use(router)

app.mount('#app')
