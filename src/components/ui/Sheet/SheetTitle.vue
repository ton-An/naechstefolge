<script setup lang="ts">
import { DialogTitle } from 'radix-vue'
import { cn } from '@/lib/utils'

defineProps<{
  class?: string
}>()
</script>

<template>
  <DialogTitle :class="cn('text-lg font-semibold text-gray-900', $props.class)">
    <slot />
  </DialogTitle>
</template>
