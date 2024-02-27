<script setup>
defineProps({
  compact: { type: Boolean, default: false },
  size: { type: String, default: 'sm' },
})
const colorMode = useColorMode()
const iconName = computed(() =>
  colorMode.value === 'dark' ? 'dark-mode' : 'light-mode',
)
const changeMode = () =>
  (colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark')
</script>

<template>
  <BaseButton
    :size="size"
    :square="compact"
    :icon-name="iconName"
    @click="changeMode"
  />
</template>
