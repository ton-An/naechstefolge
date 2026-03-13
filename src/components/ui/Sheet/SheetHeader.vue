<script lang="ts">
/**
 * SheetHeader
 *
 * Sheet header container. Flex layout for title and description.
 */
export default {}
</script>

<script setup lang="ts">
import { cn } from '@/lib/utils'

defineProps<{
  class?: string
}>()
</script>

<template>
  <div :class="cn('flex flex-col space-y-1.5 text-center sm:text-left', $props.class)">
    <slot />
  </div>
</template>
