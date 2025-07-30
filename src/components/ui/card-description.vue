<template>
  <div :class="descriptionClasses" v-bind="$attrs">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { cn } from '@/lib/utils'

interface CardDescriptionProps {
  class?: string
}

const props = defineProps<CardDescriptionProps>()

const descriptionClasses = computed(() => {
  return cn("text-sm text-muted-foreground", props.class)
})
</script> 