<script setup lang="ts">
import NavHeader from "./components/nav/NavHeader.vue";
import MainFooter from "./components/atoms/MainFooter.vue";
</script>

<template>
  <NavHeader />
  <main class="min-h-svh">
    <RouterView />
  </main>
  <MainFooter/>
</template>

<style scoped>
</style>
