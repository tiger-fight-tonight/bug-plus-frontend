import { createRouter, createWebHistory } from 'vue-router';
import routes from '@/router/routes';

const history = createWebHistory();
const router = createRouter({
  history,
  routes
});

router.beforeEach((to, _, next) => {
  if (to.meta.title) {
    document.title = `${to.meta.title}`;
  }
  next();
});

export default router;
