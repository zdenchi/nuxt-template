<script setup>
const model = defineModel({ type: [String, Number], default: '' })
defineProps({
  id: { type: String, default: '' },
  placeholder: { type: String, default: '' },
  disabled: { type: Boolean, default: false },
  loading: { type: Boolean, default: false },
  options: { type: Array, default: () => [] },
  size: {
    type: String,
    default: 'sm',
    validator(value) {
      return ['2xs', 'xs', 'sm', 'md', 'lg', 'xl'].includes(value)
    },
  },
})
const ui = {
  padding: {
    '2xs': 'px-2 py-1 pe-8',
    xs: 'px-2.5 py-1.5 pe-9',
    sm: 'px-2.5 py-1.5 pe-10',
    md: 'px-3 py-2 pe-11',
    lg: 'px-3.5 py-2.5 pe-12',
    xl: 'px-3.5 py-2.5 pe-12',
  },
  fontSize: {
    '2xs': 'text-xs',
    xs: 'text-xs',
    sm: 'text-sm',
    md: 'text-sm',
    lg: 'text-sm',
    xl: 'text-base',
  },
  icon: {
    size: {
      '2xs': 'size-4',
      xs: 'size-4',
      sm: 'size-5',
      md: 'size-5',
      lg: 'size-5',
      xl: 'size-6',
    },
    padding: {
      '2xs': 'px-2',
      xs: 'px-2.5',
      sm: 'px-2.5',
      md: 'px-3',
      lg: 'px-3.5',
      xl: 'px-3.5',
    },
  },
}
</script>

<template>
  <div class="form-select">
    <select
      v-bind="$attrs"
      :id="id"
      v-model="model"
      :class="[ui.padding[size], ui.fontSize[size]]"
      :disabled="disabled"
      class="form-item"
    >
      <option v-if="!model" value="" disabled class="placeholder">
        {{ placeholder }}
      </option>

      <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
      >
        {{ option.text }}
      </option>
    </select>

    <span class="icon-wrapper" :class="[ui.icon.padding[size]]">
      <Icon
        :name="loading ? 'loading-spinner' : 'ion:chevron-down'"
        :class="[ui.icon.size[size]]"
      />
    </span>
  </div>
</template>

<style lang="scss" scoped>
.form-select {
  @apply relative;

  .form-item {
    @apply block w-full cursor-pointer appearance-none rounded-md border-0 disabled:cursor-not-allowed disabled:opacity-75;
    @apply bg-gray-50 ring-1 ring-inset ring-gray-300 dark:bg-gray-800 dark:ring-gray-700;
    @apply text-gray-900 has-[.placeholder]:text-gray-400 dark:text-white dark:has-[.placeholder]:text-gray-500;
    @apply focus:outline-none focus:ring-2 focus:ring-yellow-500 dark:focus:ring-yellow-400;
  }

  .icon-wrapper {
    @apply pointer-events-none absolute inset-y-0 end-0 flex items-center text-gray-400 dark:text-gray-500;
  }
}
</style>
