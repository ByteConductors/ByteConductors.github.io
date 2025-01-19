<script setup lang="ts">
  const props = defineProps<{link:string,text:string}>()
</script>

<template>
  <a class="ml-2 font-semibold text-zinc-50" :href=props.link>{{props.text}}</a>
</template>

<style scoped>
</style>