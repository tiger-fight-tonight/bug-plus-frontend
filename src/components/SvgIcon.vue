<template>
  <svg :class="svgClass" aria-hidden="true">
    <use :xlink:href="iconName"></use>
  </svg>
</template>
<script lang="ts">
import { computed } from 'vue';

export default {
  name: 'SvgIcon',
  props: {
    iconClass: { type: String },
    className: { type: String }
  },
  setup(props: any) {
    const iconName = computed(() => {
      return props.iconClass ? `#icon-${props.iconClass}` : '#icon';
    });
    const svgClass = computed(() => {
      return props.className ? 'svg-icon ' + props.className : 'svg-icon';
    });
    return { iconName, svgClass };
  }
};
</script>
<style lang="scss">
.svg-icon {
  width: 1rem;
  height: 1rem;
  vertical-align: -0.15rem;
  fill: currentColor;
  overflow: hidden;
}
</style>
