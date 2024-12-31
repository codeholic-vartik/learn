<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps<{
  userId: string | null
}>()

console.log(props.userId) 
</script>

<template>
  <div>
    <p>User ID: {{ userId }}</p>  
  </div>
</template>
