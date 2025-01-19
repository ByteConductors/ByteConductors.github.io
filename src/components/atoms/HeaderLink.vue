<script setup lang="ts">
  const props = defineProps<{link:string,text:string}>()
</script>

<template>
  <a class="font-semibold text-zinc-50" :href=props.link>{{props.text}}</a>
</template>

<style scoped>
</style>