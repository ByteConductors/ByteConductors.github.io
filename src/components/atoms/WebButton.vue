<script setup lang="ts">
const props = defineProps<{type?:"button" | "reset" | "submit"}>()
</script>

<template>
  <button class="min-w-24 flex p-4 rounded-lg bg-amber-500" :type=props.type>
    <slot />
  </button>
</template>

<style scoped>

</style>