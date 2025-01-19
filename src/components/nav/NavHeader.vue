<script setup lang="ts">

import HeaderLink from "../atoms/HeaderLink.vue";
</script>

<template>
  <div class="w-full flex justify-between p-2 bg-amber-500">
    <div>
      <HeaderLink link="/" text="ByteConductors"/>
    </div>
    <div>
      <HeaderLink link="projects" text="Projects"/>
      <HeaderLink link="members" text="Members"/>
      <HeaderLink link="contact" text="Contact"/>
    </div>
  </div>
</template>

<style scoped>

</style>