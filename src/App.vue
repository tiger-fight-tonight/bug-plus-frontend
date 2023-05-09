<template>
  <n-config-provider :locale="zhCN" :date-locale="dateZhCN">
    <div id="app">
      <transition mode="out-in">
        <router-view />
      </transition>
    </div>
  </n-config-provider>
</template>

<script lang="ts">
import { NConfigProvider, zhCN, dateZhCN } from 'naive-ui' ;
import { AuthorizedUser, getAuthorizedUserInfo } from '@/api/auth';
import { onMounted, ref } from 'vue';
import { useStore } from 'vuex';
import { setCookie } from './utils/cookie';
import { ActionNames } from './store/actions';

export default {
  components: {
    NConfigProvider
  },
  data() {
    return {
      zhCN,
      dateZhCN
    };
  },
  setup() {
    const store = useStore();

    const login = async () => {
      const res = await getAuthorizedUserInfo();
      if (res && res.code === 1) {
        const userinfo: AuthorizedUser = res.data;
        store.dispatch(ActionNames.SET_USERINFO, userinfo);
        store.state.userinfo = userinfo;
      }
    };

    onMounted(() => {
      if (process.env.NODE_ENV === 'development') {
        setCookie('token', '');
      }
      login();
    });
  }
};
</script>

<style lang="scss">
#app {
  font-family: 'PingFang Regular', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100%;
  font-size: 16px;
}
.text-ellipsis-1 {
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.text-ellipsis-2 {
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
