<template>
  <div :class="alertClasses" role="alert" v-bind="$attrs">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const alertVariants = cva(
  "relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        destructive:
          "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

interface AlertProps extends VariantProps<typeof alertVariants> {
  class?: string
}

const props = withDefaults(defineProps<AlertProps>(), {
  variant: 'default'
})

const alertClasses = computed(() => {
  return cn(alertVariants({ variant: props.variant }), props.class)
})

defineExpose({
  alertVariants
})
</script> 