<template>
  <input
    :type="type"
    :class="inputClasses"
    v-bind="$attrs"
  />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { cn } from '@/lib/utils'

interface InputProps {
  type?: string
  class?: string
}

const props = withDefaults(defineProps<InputProps>(), {
  type: 'text'
})

const inputClasses = computed(() => {
  return cn(
    "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
    props.class
  )
})
</script> 