import { RouteRecordRaw } from 'vue-router';

import HomeRoute from '@/router/home';

const Page404 = () =>
  import(/* webpackChunkName: 'page404' */ '@/views/error/404.vue');

const routes: RouteRecordRaw[] = [
  HomeRoute,
  {
    path: '/:pathMatch(.*)',
    component: Page404,
    name: 'notFound',
    meta: {
      title: 'Not Found Page',
      name: 'route:page404'
    }
  }
];

export default routes;
