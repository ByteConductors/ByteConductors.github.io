<script setup lang="ts">
const props = defineProps<{title:string}>()

</script>

<template>
  <h1 class="block w-full text-xl font-bold text-zinc-50">{{props.title}}</h1>
</template>

<style scoped>

</style>