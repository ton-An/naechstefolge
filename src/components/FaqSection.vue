<script setup lang="ts">
import { HelpCircle } from 'lucide-vue-next'

import { Sheet, SheetDescription, SheetHeader, SheetTitle } from '@/components/ui/Sheet'
import i18n from '@/i18n/i18n'

const { t } = i18n.global

const GITHUB_URL = 'https://github.com/ton-An/meine-naechste-doku'

const faqItems = [
  { q: 'faq.q1', a: 'faq.a1' },
  { q: 'faq.q2', a: 'faq.a2' },
  { q: 'faq.q3', a: 'faq.a3' },
  { q: 'faq.q4', a: 'faq.a4' },
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
      <a
        :href="GITHUB_URL"
        target="_blank"
        rel="noopener noreferrer"
        class="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline focus:outline-2 focus:outline-primary focus:outline-offset-8 rounded-sm"
      >
        {{ t('faq.githubLink') }}
        <svg
          class="size-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
          />
        </svg>
      </a>
    </div>
  </Sheet>
</template>
