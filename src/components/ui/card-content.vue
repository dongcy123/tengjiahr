<template>
  <div :class="contentClasses" v-bind="$attrs">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { cn } from '@/lib/utils'

interface CardContentProps {
  class?: string
}

const props = defineProps<CardContentProps>()

const contentClasses = computed(() => {
  return cn("p-6 pt-0", props.class)
})
</script> 