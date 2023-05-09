<template>
  <n-layout :style="{ minHeight: '100vh' }">
    <!-- 顶栏 -->
    <Header />
    <n-layout>
      <!-- 页面内容区 -->
      <n-layout>
        <n-layout-content>
          <transition mode="out-in">
            <router-view />
          </transition>
        </n-layout-content>
      </n-layout>
    </n-layout>
  </n-layout>
</template>

<script lang="ts">
import { NLayout, NLayoutContent } from 'naive-ui';
import Header from '@/components/Header.vue';

export default {
  name: 'Page',
  components: {
    Header,
    NLayout,
    NLayoutContent
  }
};
</script>
