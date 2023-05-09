import axios from 'axios';
import { defineEmits } from 'vue';
import GlobalEvents from '@/constants/GlobalEvents';
import { getCookie } from './cookie';

const emit = defineEmits([GlobalEvents.UNAUTHORIZED]);

// axios基本配置
const token = getCookie('token');
axios.defaults.withCredentials = true;
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
axios.defaults.headers.put['Content-Type'] = 'application/json;charset=UTF-8';
axios.defaults.headers.common.Authorization = token || '';
axios.defaults.baseURL = '';

// POST传参序列化
axios.interceptors.request.use(
  config => {
    if (
      config.data &&
      (!config.headers['Content-Type'] ||
        /application\/json/.test(config.headers['Content-Type']))
    ) {
      config.data = JSON.stringify(config.data);
    }
    return config;
  },
  error => {
    // 错误的传参
    return Promise.reject(error);
  }
);

// 响应拦截器配置
axios.interceptors.response.use(
  response => {
    if (response.data.code === 401) {
      // 401 未授权，触发未授权事件
      emit(GlobalEvents.UNAUTHORIZED);
    }
    // 判断是否是字节流（暂定为下载文件）
    if (response.headers['accept-ranges'] === 'bytes') {
      // 处理文件名
      const disposition = response.headers['content-disposition'];
      let filename = '文件';
      if (disposition && disposition.match(/attachment/)) {
        const filenameRe = /filename\*=utf-8''(.+)$/.exec(disposition);
        if (filenameRe) {
          filename = decodeURIComponent(filenameRe[1]);
        }
      }
      // 下载
      const blob = new Blob([response.data]);
      const url = URL.createObjectURL(blob);
      const dlLink = document.createElement('a');
      dlLink.href = url;
      dlLink.download = filename;
      dlLink.click();
    }
    return response;
  },
  error => {
    if (error.response.status == 401 || error.response.status === 403) {
      // 401 未授权，触发未授权事件
    } else {
      return error.response;
    }
  }
);

export default axios;
