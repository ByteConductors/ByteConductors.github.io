<script setup lang="ts">
  const props = defineProps<{link:string,text:string}>()
</script>

<template>
  <RouterLink class="font-semibold text-zinc-50" :to=props.link>{{props.text}}</RouterLink>
</template>

<style scoped>
</style>