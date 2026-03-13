<script lang="ts">
/**
 * LegalPageLayout
 *
 * Wrapper for legal pages (Impressum, Datenschutz) with back link, title, and content area.
 */
export default {}
</script>

<script setup lang="ts">
import { ArrowLeft } from 'lucide-vue-next'
import { RouterLink } from 'vue-router'

defineProps<{
  title: string
}>()
</script>

<template>
  <div class="min-h-screen px-4 py-12 sm:py-16">
    <div class="mx-auto max-w-2xl">
      <RouterLink
        to="/"
        class="mb-8 inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-primary focus:outline-2 focus:outline-primary focus:outline-offset-2 rounded-sm"
      >
        <ArrowLeft class="size-4" />
        Zurück
      </RouterLink>

      <h1 class="font-league-gothic text-4xl font-bold uppercase text-black/90 mb-8">
        {{ title }}
      </h1>

      <div class="prose prose-gray max-w-none space-y-6 text-sm leading-relaxed text-gray-700">
        <slot />
      </div>
    </div>
  </div>
</template>
