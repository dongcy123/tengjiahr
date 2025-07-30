<template>
  <div :class="descriptionClasses" v-bind="$attrs">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { cn } from '@/lib/utils'

interface AlertDescriptionProps {
  class?: string
}

const props = defineProps<AlertDescriptionProps>()

const descriptionClasses = computed(() => {
  return cn("text-sm [&_p]:leading-relaxed", props.class)
})
</script> 