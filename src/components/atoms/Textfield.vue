<script setup lang="ts">
  const props = defineProps<{name:string, placeholder?:string}>();
</script>

<template>
  <textarea :id=props.name
            :name=props.name
            class="block p-2.5 w-full text-sm text-zinc-900 border-0 border-b-2 border-zinc-300
                  appearance-none dark:text-white dark:border-zinc-600 dark:focus:border-amber-500
                  focus:outline-none focus:ring-0 focus:border-amber-600 peer bg-zinc-800" />
  <label :for=props.name
         class="peer-focus:font-medium absolute text-sm text-zinc-500 dark:text-zinc-400
                 duration-300 pl-2.5 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:start-0
                 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-amber-600
                 peer-focus:dark:text-amber-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0
                 peer-focus:scale-75 peer-focus:-translate-y-6 pointer-events-none">
    {{props.placeholder}}
  </label>
</template>

<style scoped>

</style>