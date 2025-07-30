<template>
  <label :class="labelClasses" v-bind="$attrs">
    <slot />
  </label>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
)

interface LabelProps extends VariantProps<typeof labelVariants> {
  class?: string
}

const props = defineProps<LabelProps>()

const labelClasses = computed(() => {
  return cn(labelVariants(), props.class)
})

defineExpose({
  labelVariants
})
</script> 