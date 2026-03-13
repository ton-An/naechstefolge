<script lang="ts">
/**
 * FilterHeader
 *
 * Filter bar with category and genre selectors. Applies filters to fetch episodes.
 */
export default {}
</script>

<script setup lang="ts">
import { LoaderCircle } from 'lucide-vue-next'
import { onMounted } from 'vue'

import i18n from '@/i18n/i18n'
import { useEpisodesStore } from '@/stores/episodes_store/episodes_store'
import { useFilterStore } from '@/stores/filterStore/filterStore'

import CategorySelector from './CategorySelector.vue'
import GenreSelector from './GenreSelector.vue'

const { t } = i18n.global

const filterStore = useFilterStore()
const episodesStore = useEpisodesStore()

onMounted(() => {
  filterStore.updateSelectedCategories(['pub-form-10003'])
  filterStore.updateSelectedGenres(['all'])
  applyFilters()
})

const applyFilters = () => {
  filterStore.resetIsModified()
  const selectedGenres = filterStore.getSelectedGenres

  episodesStore.getNewEpisodes(selectedGenres)
}
</script>

<template>
  <div>
    <div
      class="bg-gray-400/30 md:mx-20 rounded-xl backdrop-blur-lg flex flex-col md:flex-row justify-center gap-4 p-4"
    >
      <div class="w-full md:w-1/2 flex justify-center md:justify-end">
        <CategorySelector />
      </div>
      <div
        class="w-full md:w-1/2 gap-4 flex justify-center items-center md:justify-between flex-col md:flex-row"
      >
        <GenreSelector />
        <button
          v-if="filterStore.state.isModified || episodesStore.state.status === 'loading'"
          class="bg-orange-500 text-white px-4 py-2 rounded-lg min-w-32 flex items-center justify-center gap-2 focus:outline-2 focus:outline-primary focus:outline-offset-2"
          @click="applyFilters"
        >
          <LoaderCircle
            v-if="episodesStore.state.status === 'loading'"
            class="w-4 h-4 my-1 animate-spin"
            :stroke-width="3"
          />
          <span v-else>
            {{ t('common.apply') }}
          </span>
        </button>
      </div>
    </div>
  </div>
</template>
