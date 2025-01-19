<script setup lang="ts">

import FormInput from "../components/atoms/FormInput.vue";
import Textfield from "../components/atoms/Textfield.vue";
import WebButton from "../components/atoms/WebButton.vue";
</script>

<template>
  <div class="max-w-5xl w-full mx-auto mt-14">
    <form class="flex flex-col gap-4 p-4">
      <FormInput type="text" placeholder="Name" name="name" />
      <FormInput type="email" placeholder="Email" name="email"/>
      <Textfield name="message" placeholder="Message"/>
      <WebButton type="submit">Submit</WebButton>
    </form>
  </div>
</template>

<style scoped>

</style>