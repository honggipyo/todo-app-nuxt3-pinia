<template>
  <div>
    <NuxtRouteAnnouncer />
    <Todo />
  </div>
</template>

<script setup lang="ts">
import Todo from '~/components/Todo.vue';
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
  font-family: 'Arial', 'Helvetica', sans-serif;
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: inherit;
}
</style>
