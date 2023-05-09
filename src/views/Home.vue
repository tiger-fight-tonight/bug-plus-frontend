<template>
  <div class="home">
    <n-h1 class="unique-title">BUG PlUS</n-h1>
    <p>一款BUG管理系统</p>
    <p>帮助你解决问题，提高沟通效率</p>
    <p>plus一般的速度</p>
    <div class="button-group">
      <n-button>开始吧</n-button>
    </div>
    <n-element class="left-theme">
      <svg-icon className="theme-icon" iconClass="left-theme"></svg-icon>
    </n-element>
    <n-element class="right-theme">
      <svg-icon className="theme-icon" iconClass="right-theme"></svg-icon>
    </n-element>
  </div>
</template>

<script lang="ts">
import { NH1, NButton, NElement } from 'naive-ui';
import SvgIcon from '@/components/SvgIcon.vue';
import { onMounted } from 'vue';

export default {
  name: 'Home',
  components: {
    NH1,
    NButton,
    NElement,
    SvgIcon
  },
  setup() {
    onMounted(() => {
      console.log('Hello world!');
    });

    return {};
  }
};
</script>

<style lang="scss">
.home {
  margin: 0;
  padding: 0;
  height: calc(100vh - 64px);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .unique-title {
    font-family: Metropolis, sans-serif;
    line-height: 1;
    margin-bottom: 18px !important;
    margin-top: 0px;
    font-size: 80px !important;
  }
  p {
    font-size: 1rem;
    margin-bottom: 4px;
    margin-top: 4px;
    font-weight: 500;
  }
  .button-group {
    margin-top: 1rem;
  }
  .left-theme {
    position: absolute;
    left: 0;
  }
  .right-theme {
    position: absolute;
    right: 0;
  }
  .theme-icon {
    width: 40rem;
    height: 40rem;
  }
}

@media only screen and (max-width: 1680px) {
  .home {
    .theme-icon {
      width: 28rem;
      height: 28rem;
    }
  }
}

@media only screen and (max-width: 1024px) {
  .home {
    padding: 2rem 1rem;
    justify-content: flex-start;
    align-items: flex-start;
    height: 100vh;
    .unique-title {
      font-size: 64px !important;
    }
    .left-theme {
      top: 16rem;
    }
    .right-theme {
      display: none;
    }
    .theme-icon {
      width: 18rem;
      height: 18rem;
    }
  }
}
</style>
