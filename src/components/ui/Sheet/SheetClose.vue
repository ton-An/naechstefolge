<script setup lang="ts">
import { DialogClose, Slot } from 'radix-vue'
</script>

<template>
  <DialogClose :as="Slot">
    <slot>
      <button
        type="button"
        class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gray-100 text-gray-900 hover:bg-gray-200 h-9 px-4 py-2"
      >
        Close
      </button>
    </slot>
  </DialogClose>
</template>
