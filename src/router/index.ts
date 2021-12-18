// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const baseRoutes: RouteRecordRaw[] = [
  {
    path: '/404',
    name: '404',
    component: () => import('@/pages/[...all].vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/pages/login.vue'),
  },
];

const base = import.meta.env.VITE_ROUTER?.toString() || '';

const routes = [...baseRoutes];

const router = createRouter({
  history: createWebHistory(base),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.length === 0) {
    next('/404');
  } else {
    next();
  }
});

export default router;
