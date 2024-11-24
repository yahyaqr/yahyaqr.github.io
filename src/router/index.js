import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import Profile from '../pages/Profile.vue';
import Portfolio from '../pages/Portfolio.vue';

const routes = [
  { path: '/', component: Home }, // Default route
  { path: '/profile', component: Profile },
  { path: '/portfolio', component: Portfolio },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
