<script setup>
const props = defineProps({
  disabled: { type: Boolean, default: false },
  loading: { type: Boolean, default: false },
  to: { type: String, default: '' },
  square: { type: Boolean, default: false },
  iconName: { type: String, default: '' },
  size: {
    type: String,
    default: 'sm',
    validator(value) {
      return ['2xs', 'xs', 'sm', 'md', 'lg', 'xl'].includes(value)
    },
  },
})
const ui = {
  square: {
    '2xs': 'p-1',
    xs: 'p-1.5',
    sm: 'p-1.5',
    md: 'p-2',
    lg: 'p-2.5',
    xl: 'p-2.5',
  },
  fontSize: {
    '2xs': 'text-xs',
    xs: 'text-xs',
    sm: 'text-sm',
    md: 'text-sm',
    lg: 'text-sm',
    xl: 'text-base',
  },
  gap: {
    '2xs': 'gap-x-1',
    xs: 'gap-x-1.5',
    sm: 'gap-x-1.5',
    md: 'gap-x-2',
    lg: 'gap-x-2.5',
    xl: 'gap-x-2.5',
  },
  padding: {
    '2xs': 'px-2 py-1',
    xs: 'px-2.5 py-1.5',
    sm: 'px-2.5 py-1.5',
    md: 'px-3 py-2',
    lg: 'px-3.5 py-2.5',
    xl: 'px-3.5 py-2.5',
  },
  icon: {
    '2xs': 'size-4',
    xs: 'size-4',
    sm: 'size-5',
    md: 'size-5',
    lg: 'size-5',
    xl: 'size-6',
  },
}
const componentIs = computed(() =>
  props.to ? resolveComponent('NuxtLinkLocale') : 'button',
)
</script>

<template>
  <component
    :is="componentIs"
    :to="to"
    v-bind="{ ...$attrs }"
    class="button"
    :disabled="disabled || loading"
    :class="[
      ui.fontSize[size],
      ui.gap[size],
      !square && ui.padding[size],
      square && ui.square[size],
    ]"
  >
    <span v-if="loading">
      <Icon name="loading-spinner" :class="[ui.icon[size]]" />
    </span>

    <slot />

    <span v-if="iconName">
      <Icon :name="iconName" :class="[ui.icon[size]]" />
    </span>
  </component>
</template>

<style lang="scss" scoped>
.button {
  @apply inline-flex flex-shrink-0 cursor-pointer items-center rounded-md border-0;
  @apply bg-gray-50 text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-200 dark:ring-gray-700 dark:hover:bg-gray-700/50;
  @apply disabled:cursor-not-allowed disabled:bg-gray-50 disabled:opacity-75 dark:disabled:bg-gray-800;
  @apply focus:outline-none focus-visible:outline-0 focus-visible:ring-2 focus-visible:ring-yellow-500 dark:focus-visible:ring-yellow-400;
}
</style>
