// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Layout from '@/layout/index.vue';

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

const mainRoutes = [
  // 菜单-1
  {
    path: '/',
    name: 'home',
    component: Layout,
    children: [
      {
        path: '/',
        name: 'menu-1',
        component: () => import('@/pages/menu-1/item-1.vue'),
      },
      {
        path: '/item-2/item-1',
        name: 'item-2-item-1',
        component: () => import('@/pages/menu-1/item-2/item-1.vue'),
      },
    ],
  },
  // 菜单-2
  {
    path: '/',
    name: 'menu-2',
    component: Layout,
    children: [
      {
        path: '/menu-2/item-1',
        name: 'menu-2-item-1',
        component: () => import('@/pages/menu-2/item-1.vue'),
      },
      {
        path: '/menu-2/item-2',
        name: 'menu-2-item-2',
        component: () => import('@/pages/menu-2/item-2.vue'),
      },
    ],
  },
];
const base = import.meta.env.VITE_ROUTER?.toString() || '';

const routes = [...baseRoutes, ...mainRoutes];

console.log(routes);
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