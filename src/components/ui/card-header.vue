<template>
  <div :class="headerClasses" v-bind="$attrs">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { cn } from '@/lib/utils'

interface CardHeaderProps {
  class?: string
}

const props = defineProps<CardHeaderProps>()

const headerClasses = computed(() => {
  return cn("flex flex-col space-y-1.5 p-6", props.class)
})
</script> 