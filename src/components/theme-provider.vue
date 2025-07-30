<template>
  <div :data-theme="theme">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'

interface Props {
  defaultTheme?: 'light' | 'dark' | 'system'
  storageKey?: string
  enableSystem?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  defaultTheme: 'system',
  storageKey: 'ui-theme',
  enableSystem: true
})

const theme = ref(props.defaultTheme)

const updateTheme = () => {
  const savedTheme = localStorage.getItem(props.storageKey)
  if (savedTheme) {
    theme.value = savedTheme as 'light' | 'dark' | 'system'
  }
  
  if (theme.value === 'system' && props.enableSystem) {
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    document.documentElement.setAttribute('data-theme', systemTheme)
  } else {
    document.documentElement.setAttribute('data-theme', theme.value)
  }
}

const setTheme = (newTheme: 'light' | 'dark' | 'system') => {
  theme.value = newTheme
  localStorage.setItem(props.storageKey, newTheme)
  updateTheme()
}

const toggleTheme = () => {
  const newTheme = theme.value === 'light' ? 'dark' : 'light'
  setTheme(newTheme)
}

onMounted(() => {
  updateTheme()
  
  // Listen for system theme changes
  if (props.enableSystem) {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    mediaQuery.addEventListener('change', updateTheme)
  }
})

// Expose methods for parent components
defineExpose({
  theme,
  setTheme,
  toggleTheme
})
</script> 