<script lang="ts">
/**
 * HomeView
 *
 * Main home view. Hero with ZDF logo, gradient blob, filter header, episode grid, and FAQ button. Scroll-based blur/opacity effects.
 */
export default {}
</script>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'

import EpisodeCard from '@/components/EpisodeCard.vue'
import FaqButtonWithSheet from '@/components/FaqButtonWithSheet.vue'
import FilterHeader from '@/components/FilterHeader.vue'
import GradientBlob from '@/components/GradientBlob.vue'
import ZdfLogo from '@/components/ZdfLogo.vue'
import i18n from '@/i18n/i18n'
import { useEpisodesStore } from '@/stores/episodes_store/episodes_store'

const episodesStore = useEpisodesStore()

const { t } = i18n.global

const scrollY = ref(0)

const onScroll = () => {
  scrollY.value = window.scrollY
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})

// Blur starts at 50px scroll, maxes out at 500px scroll
const logoBlur = computed(() => {
  const start = 160
  const end = 1800
  const linearProgress = Math.min(Math.max((scrollY.value - start) / (end - start), 0), 1)

  // Stronger ease-out curve for even more gradual start
  const easedProgress = 1 - Math.pow(1 - linearProgress, 2400)

  return `blur(${easedProgress * 8}px)`
})

// Title fades out from 80px to 250px scroll
const titleOpacity = computed(() => {
  const start = 0
  const end = 200
  const progress = Math.min(Math.max((scrollY.value - start) / (end - start), 0), 1)
  return 1 - progress
})

const logoOpacity = computed(() => {
  const start = 100
  const end = 400
  const progress = Math.min(Math.max((scrollY.value - start) / (end - start), 0), 1)
  return 1 - progress
})
</script>

<template>
  <div class="fixed top-25 left-[50%] translate-x-[-50%] -z-10 flex justify-center w-full px-4">
    <GradientBlob
      class="absolute top-[50%] left-[50%] size-140 translate-x-[-50%] translate-y-[-50%]"
    />

    <div
      class="hero-container-soft-edges inline-flex flex-col items-center justify-center gap-2 px-4 sm:px-8 py-6 rounded-2xl backdrop-blur-sm transition-[filter] duration-200 relative w-full max-w-4xl"
      :style="{ filter: logoBlur, opacity: logoOpacity }"
    >
      <ZdfLogo class="w-55 relative z-1" :style="{ opacity: logoOpacity }" />
      <h1
        class="hero-title text-8xl md:text-[150px] -mt-13 text-center uppercase font-extrabold transition-opacity duration-200 text-black/86 font-league-gothic leading-tight"
        :style="{ opacity: titleOpacity }"
      >
        {{ t('common.nextEpisode') }}
      </h1>
    </div>
  </div>

  <div class="fixed bottom-4 right-4 z-30">
    <FaqButtonWithSheet />
  </div>
  <div v-if="episodesStore.state.status === 'loading'"></div>
  <div class="px-4 w-full z-10 mt-140 relative">
    <FilterHeader class="sticky top-4 left-0 z-20" />
    <div class="relative z-1 pt-10">
      <div class="flex flex-wrap gap-6 justify-center">
        <template v-if="episodesStore.state.status === 'success'">
          <div
            v-for="episode in episodesStore.state.episodes"
            :key="episode.title"
            class="w-full sm:w-72"
          >
            <EpisodeCard :episode="episode" />
          </div>
        </template>
        <template v-else>
          <div v-for="i in 10" :key="i" class="w-full sm:w-72">
            <EpisodeCard :episode="null" />
          </div>
        </template>
      </div>
    </div>
    vor="i in10
  </div>
  :key
  <div v-if="episodesStore.state.status === 'failure'" class="w-full sm:w-72">Failure</div>
</template>
