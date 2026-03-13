<script lang="ts">
/**
 * Sheet
 *
 * Slide-out sheet/drawer. Wraps Radix Dialog with configurable side (top/right/bottom/left).
 */
export default {}
</script>

<script setup lang="ts">
import {
  DialogClose,
  DialogContent,
  DialogOverlay,
  DialogPortal,
  DialogRoot,
  DialogTrigger,
} from 'radix-vue'
import { X } from 'lucide-vue-next'
import { type HTMLAttributes, computed } from 'vue'
import { cn } from '@/lib/utils'

const props = withDefaults(
  defineProps<{
    side?: 'top' | 'right' | 'bottom' | 'left'
    showCloseButton?: boolean
    class?: HTMLAttributes['class']
  }>(),
  {
    side: 'right',
    showCloseButton: true,
  }
)

const sideClasses = computed(() => {
  const base =
    'fixed z-50 flex flex-col gap-4 bg-white/95 backdrop-blur-lg shadow-lg p-6 overflow-y-auto'
  const sides = {
    top: 'inset-x-0 top-0 border-b sheet-content-top max-h-[85vh]',
    bottom: 'inset-x-0 bottom-0 border-t sheet-content-bottom max-h-[85vh]',
    left: 'inset-y-0 left-0 h-full w-3/4 border-r sheet-content-left sm:max-w-sm',
    right: 'inset-y-0 right-0 h-full w-3/4 border-l sheet-content-right sm:max-w-sm',
  }
  return cn(base, sides[props.side])
})
</script>

<template>
  <DialogRoot v-bind="$attrs">
    <DialogTrigger as-child>
      <slot name="trigger" />
    </DialogTrigger>
    <DialogPortal>
      <DialogOverlay class="fixed inset-0 z-50 bg-black/50 sheet-overlay" />
      <DialogContent
        :class="[sideClasses, props.class]"
        :aria-describedby="undefined"
      >
        <slot />
        <DialogClose
          v-if="showCloseButton"
          class="absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:pointer-events-none"
          aria-label="Close"
        >
          <X class="size-4" />
        </DialogClose>
      </DialogContent>
    </DialogPortal>
  </DialogRoot>
</template>
