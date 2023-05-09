import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import naive from 'naive-ui';
import SvgIcon from '@/components/SvgIcon.vue';
import '@/assets/css/font.css';

const app = createApp(App)
  .use(router)
  .use(store);

//const req = require.context('@/assets/svg', false, /\.svg$/);
//req.keys().map(req);
app.component('SvgIcon', SvgIcon);
app.use(naive).mount('#app');
