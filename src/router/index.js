import { createRouter, createWebHistory } from 'vue-router';
import beforeEach from './beforeEach';
// import { useAuthState } from '../stores/store.js';
import routes from './routes.js';

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  // console.log(useAuthState);
  next();
});

export default router;
