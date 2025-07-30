<template>
  <div :class="titleClasses" v-bind="$attrs">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { cn } from '@/lib/utils'

interface CardTitleProps {
  class?: string
}

const props = defineProps<CardTitleProps>()

const titleClasses = computed(() => {
  return cn(
    "text-2xl font-semibold leading-none tracking-tight",
    props.class
  )
})
</script> 