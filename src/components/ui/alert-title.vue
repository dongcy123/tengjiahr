<template>
  <h5 :class="titleClasses" v-bind="$attrs">
    <slot />
  </h5>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { cn } from '@/lib/utils'

interface AlertTitleProps {
  class?: string
}

const props = defineProps<AlertTitleProps>()

const titleClasses = computed(() => {
  return cn("mb-1 font-medium leading-none tracking-tight", props.class)
})
</script> 