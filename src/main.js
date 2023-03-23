import { createApp } from "vue";
import { initializeApp } from "firebase/app";

import App from "./App.vue";
import router from "./router";

import "./assets/style.css";

const firebaseConfig = {
  apiKey: "AIzaSyB9L-QeO0_44hhD73E2idRMc3WnKLilZxk",
  authDomain: "xenon-lantern-374005.firebaseapp.com",
  projectId: "xenon-lantern-374005",
  storageBucket: "xenon-lantern-374005.appspot.com",
  messagingSenderId: "502567687239",
  appId: "1:502567687239:web:a8609738df853419148d62",
  measurementId: "G-8CTSZXX0KN",
};

initializeApp(firebaseConfig);
const app = createApp(App);

app.use(router);

app.mount("#app");
