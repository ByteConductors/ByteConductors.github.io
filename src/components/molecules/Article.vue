<script setup lang="ts">
import Headline from "../atoms/Headline.vue";

const props = defineProps<{title:string, content:string}>()
</script>

<template >
  <div class="flex w-full">
    <div class="max-w-xl mx-auto">
      <Headline :title=props.title />
      <slot />
    </div>
  </div>
</template>

<style scoped>

</style>