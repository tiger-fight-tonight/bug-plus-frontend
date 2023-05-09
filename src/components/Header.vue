<template>
  <n-layout-header class="header nav" bordered id="header">
    <n-text class="ui-logo">BUG PLUS</n-text>
  </n-layout-header>
</template>

<script lang="ts">
import { NLayoutHeader, NText } from 'naive-ui';

export default {
  name: 'Header',
  components: {
    NLayoutHeader,
    NText
  },
  setup() {
    return {};
  }
};
</script>

<style lang="scss">
.header {
  transition: color 0.3s var(--n-bezier), background-color 0.3s var(--n-bezier),
    box-shadow 0.3s var(--n-bezier), border-color 0.3s var(--n-bezier);
  box-sizing: border-box;
  width: 100%;
  background-color: var(--n-color);
  color: var(--n-text-color);
  --side-padding: 32px;
  grid-template-columns: calc(272px - var(--side-padding)) 1fr auto;
  height: 4rem;
  .ui-logo {
    font-weight: 600;
  }
}
.nav {
  display: grid;
  align-items: center;
  grid-template-rows: calc(var(--header-height) - 1px);
  padding: 0 var(--side-padding);
}
</style>
