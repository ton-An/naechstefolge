<script setup lang="ts">
import { DialogDescription } from 'radix-vue'
import { cn } from '@/lib/utils'

defineProps<{
  class?: string
}>()
</script>

<template>
  <DialogDescription :class="cn('text-sm text-gray-500', $props.class)">
    <slot />
  </DialogDescription>
</template>
