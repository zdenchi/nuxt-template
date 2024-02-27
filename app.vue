<script setup>
const { finalizePendingLocaleChange } = useI18n()
</script>

<template>
  <NuxtLayout>
    <NuxtPage
      :transition="{
        name: 'page',
        mode: 'out-in',
        onBeforeEnter: async () => {
          await finalizePendingLocaleChange()
        },
      }"
    />
  </NuxtLayout>
</template>
