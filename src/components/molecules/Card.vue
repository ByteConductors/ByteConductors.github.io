<script setup lang="ts">
import Headline from "../atoms/Headline.vue";

const props = defineProps<{title:string}>()
</script>

<template>
  <Headline :title=props.title />
</template>

<style scoped>

</style>