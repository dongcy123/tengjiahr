<template>
  <div :class="cardClasses" v-bind="$attrs">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { cn } from '@/lib/utils'

interface CardProps {
  class?: string
}

const props = defineProps<CardProps>()

const cardClasses = computed(() => {
  return cn(
    "rounded-lg border bg-card text-card-foreground shadow-sm",
    props.class
  )
})
</script> 