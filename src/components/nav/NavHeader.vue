<script setup lang="ts">

import HeaderLink from "../atoms/HeaderLink.vue";
</script>

<template>
  <div class="w-full flex justify-between p-4 fixed top-0 left-0 bg-amber-500">
    <div>
      <HeaderLink link="/" text="ByteConductors"/>
    </div>
    <div class="flex gap-4">
      <HeaderLink link="news" text="News"/>
      <HeaderLink link="projects" text="Projects"/>
      <HeaderLink link="members" text="Members"/>
      <HeaderLink link="contact" text="Contact"/>
    </div>
  </div>
</template>

<style scoped>

</style>