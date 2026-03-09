<script setup lang="ts">
import { BookMarked, Clapperboard, Film, List, Newspaper, SearchIcon, Tv } from 'lucide-vue-next'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

import { useFilterStore } from '@/stores/filterStore/filterStore'

import CustomSelector from './CustomSelector/CustomSelector.vue'
import type { CustomSelectorOption } from './CustomSelector/customSelectorOptions'

const { t } = useI18n()

const options: Record<string, CustomSelectorOption> = {
  all: {
    i18nKey: 'common.all',
    id: 'all',
    icon: List,
  },
  'pub-form-10003': {
    i18nKey: 'category.documentary',
    id: 'pub-form-10003',
    icon: BookMarked,
  },
  'pub-form-10004': {
    i18nKey: 'category.movies',
    id: 'pub-form-10004',
    icon: Clapperboard,
  },
  'pub-form-10009': {
    i18nKey: 'category.report',
    id: 'pub-form-10009',
    icon: SearchIcon,
  },
  'pub-form-10010': {
    i18nKey: 'category.series',
    id: 'pub-form-10010',
    icon: Film,
  },
  'pub-form-10013': {
    i18nKey: 'category.magazine',
    id: 'pub-form-10013',
    icon: Newspaper,
  },
  'pub-form-10055': {
    i18nKey: 'category.show',
    id: 'pub-form-10055',
    icon: Tv,
  },
}

const filterStore = useFilterStore()

const availableCategories = computed(() =>
  filterStore.state.availableCategories.map((category: string) => options[category]!),
)

const selectedCategories = computed(() =>
  filterStore.state.selectedCategories.map((category: string) => options[category]!),
)
const onValueUpdated = (value: CustomSelectorOption[]) => {
  filterStore.updateSelectedCategories(value.map((v) => v.id))
}
</script>

<template>
  <CustomSelector
    :options="availableCategories"
    :values="selectedCategories"
    :placeholder="t('common.selectCategories')"
    :onValueUpdated="onValueUpdated"
    :disabled="false"
  />
</template>
