import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomeView.vue';
import AboutPage from '../views/AboutView.vue';
import ContactPage from '../views/ContactPage.vue';

const routes = [
  { path: '', component: HomePage },
  { path: '/about', component: AboutPage },
  { path: '/contact', component: ContactPage }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;