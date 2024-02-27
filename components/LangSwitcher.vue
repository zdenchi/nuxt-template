<script setup>
const { locale, locales, setLocale } = useI18n()
const props = defineProps({
  compact: { type: Boolean, default: false },
  size: { type: String, default: 'sm' },
})
const options = computed(() => {
  return locales.value.map((locale) => ({
    text: props.compact ? locale.code : locale.name,
    value: locale.code,
  }))
})
watch(locale, (value) => setLocale(value))
</script>

<template>
  <BaseSelect v-model="locale" :size="size" :options="options" />
</template>
