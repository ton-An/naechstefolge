<script setup lang="ts">
import { Check } from 'lucide-vue-next'
import { ComboboxItem } from 'radix-vue'

import i18n from '@/i18n/i18n'

import type { CustomSelectorOption } from './customSelectorOptions'

const { t } = i18n.global

defineProps<{
  option: CustomSelectorOption
  isSelected: boolean
}>()
</script>

<template>
  <ComboboxItem
    :key="option.id"
    class="flex justify-between items-center not-last:mb-1.5 rounded-md px-2 py-3 -mx-2 -my-1.5 data-[highlighted]:bg-gray-400/15 data-[highlighted]:outline-none"
    :value="option"
  >
    <div class="leading-none flex items-center cursor-pointer gap-2 relative select-none">
      <component :is="option.icon" class="size-5.5" />
      <span>{{ t(option.i18nKey) }}</span>
    </div>

    <Check v-if="isSelected" class="size-4 text-orange-600" />
  </ComboboxItem>
</template>
