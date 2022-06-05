import * as Vue from 'vue'
import App from './App.vue'
import * as VueRouter from "vue-router";

import Home from "@/views/Home";

const routes = [
    {
      path: "/",
      name: 'LandingPage',
      component: Home
    }

];
  
const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes
})

const app = Vue.createApp(App)
// Make sure to _use_ the router instance to make the
// whole app router-aware.

app.use(router)
app.mount('#app')