<script setup lang="ts">

import {ref} from 'vue'

let count = ref(0)

</script>

<template>
  <button @click="count++">Add 1</button>
  <p>Count is: {{ count }}</p>
</template>

<style scoped>
* {
  background: white;
}
</style>