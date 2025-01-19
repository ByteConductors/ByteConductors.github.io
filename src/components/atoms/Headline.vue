<script setup lang="ts">
const props = defineProps<{title:string}>()

</script>

<template>
  <h1 class="w-full block">{{props.title}}</h1>
</template>

<style scoped>

</style>