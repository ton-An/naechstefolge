<script setup lang="ts">
import { HelpCircle } from 'lucide-vue-next'
import { useI18n } from 'vue-i18n'

import {
  Sheet,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/Sheet'

const { t } = useI18n()

const faqItems = [
  { q: 'faq.q1', a: 'faq.a1' },
  { q: 'faq.q2', a: 'faq.a2' },
  { q: 'faq.q3', a: 'faq.a3' },
] as const
</script>

<template>
  <Sheet side="right" class="w-full sm:max-w-lg">
    <template #trigger>
      <button
        type="button"
        class="inline-flex items-center gap-2 rounded-lg bg-white/60 px-4 py-2.5 text-sm font-medium backdrop-blur-3xl transition-colors hover:bg-white/80 focus:outline-2 focus:outline-primary focus:outline-offset-2"
      >
        <HelpCircle class="size-5" />
        {{ t('faq.openFaq') }}
      </button>
    </template>
    <SheetHeader>
        <SheetTitle>{{ t('faq.title') }}</SheetTitle>
        <SheetDescription>
          {{ t('faq.description') }}
        </SheetDescription>
      </SheetHeader>
      <div class="mt-6 space-y-6">
        <div
          v-for="(item, i) in faqItems"
          :key="i"
          class="border-b border-gray-200 pb-4 last:border-0 last:pb-0"
        >
          <h3 class="font-semibold text-gray-900">
            {{ t(item.q) }}
          </h3>
          <p class="mt-2 text-sm leading-relaxed text-gray-600">
            {{ t(item.a) }}
          </p>
        </div>
      </div>
  </Sheet>
</template>
