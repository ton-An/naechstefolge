<script lang="ts">
/**
 * SplashView
 *
 * Splash screen with animated ZDF logo. Handles scroll lock during splash and fades out over 3.3s.
 */
export default {}
</script>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { RouterView } from 'vue-router'

import ZdfAnimatedLogo from '@/components/ZdfAnimatedLogo.vue'

const splashRef = ref<HTMLElement | null>(null)

const unlockScroll = () => {
  document.body.style.overflow = ''
}

onMounted(async () => {
  document.body.style.overflow = 'hidden'

  const fallback = setTimeout(unlockScroll, 2000)
  onUnmounted(() => clearTimeout(fallback))
})

onUnmounted(() => {
  unlockScroll()
})
</script>

<template>
  <div>
    <div
      ref="splashRef"
      class="pointer-events-none fixed top-0 left-0 w-full h-full flex justify-center items-center z-100 splash"
    >
      <ZdfAnimatedLogo class="w-40" />
    </div>
    <RouterView />
  </div>
</template>

<style scoped>
.splash {
  opacity: 0;
  background-color: #ffffff;
  animation: opacity-fade-out 3.3s ease-in-out;
}

@keyframes opacity-fade-out {
  from,
  56% {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
}
</style>
