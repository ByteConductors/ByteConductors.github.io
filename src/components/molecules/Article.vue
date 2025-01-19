<script setup lang="ts">
import Headline from "../atoms/Headline.vue";

const props = defineProps<{title:string}>()
</script>

<template >
  <div class="flex w-full">
    <div class="w-full flex flex-col max-w-6xl mx-auto p-8 gap-4">
      <Headline :title=props.title id="about"/>
      <slot />
    </div>
  </div>
</template>

<style scoped>

</style>