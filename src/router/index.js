import { createRouter, createWebHistory } from "vue-router";

import IndexComp from "../views/IndexComp.vue";
import ServicesComp from "../views/ServicesComp.vue";
import ContactComp from "../views/ContactComp.vue";
import Comp404 from "../views/Comp404.vue";
import PrivacyPolicyComp from '../views/PrivacyPolicyComp.vue';

const routes = [
  {
    path: "/",
    name: "home",
    component: IndexComp,
  },
  
  {
    path: "/services",
    name: "services",
    component: ServicesComp,   
  },
  {
    path: "/contacts",
    name: "contact",
    component: ContactComp,
  },
  {
    path: "/privacyPolicy",
    name: "privacyPolicy",
    component: PrivacyPolicyComp,
  },
  {
    path: '/:CatchAll(.*)',
    name: 'Comp404',
    component: Comp404,
  }, 

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,  
  scrollBehavior(to, from, savedPosition) {
      if (to.hash) {
        return {
          selector: to.hash,
          behavior: 'smooth'
        }
      } else {
        return { x: 0, y: 0 }
      }
    }
  
});


export default router;
