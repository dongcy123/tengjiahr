<template>
  <div :class="footerClasses" v-bind="$attrs">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { cn } from '@/lib/utils'

interface CardFooterProps {
  class?: string
}

const props = defineProps<CardFooterProps>()

const footerClasses = computed(() => {
  return cn("flex items-center p-6 pt-0", props.class)
})
</script> 