import { RouteRecordRaw } from 'vue-router';

const Page = () => import(/* webpackChunkName: 'page' */ '@/views/Page.vue');
const Home = () => import(/* webpackChunkName: 'home' */ '@/views/Home.vue');

const HomeRoute: RouteRecordRaw = {
  path: '/home',
  component: Page,
  children: [
    {
      path: '/',
      name: 'home',
      meta: {
        title: 'BUG-PLUS',
        name: 'route:home'
      },
      component: Home
    }
  ]
};

export default HomeRoute;
