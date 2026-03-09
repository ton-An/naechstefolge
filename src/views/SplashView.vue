<script setup lang="ts">
import { nextTick, onMounted, onUnmounted, ref } from 'vue'
import { RouterView } from 'vue-router'

import ZdfAnimatedLogo from '@/components/ZdfAnimatedLogo.vue'

const splashRef = ref<HTMLElement | null>(null)

const SPLASH_ANIMATION_NAME = 'opacity-fade-out'

const unlockScroll = () => {
  document.body.style.overflow = ''
}

const onSplashAnimationEnd = (e: AnimationEvent) => {
  if (e.animationName === SPLASH_ANIMATION_NAME) {
    unlockScroll()
  }
}

onMounted(async () => {
  document.body.style.overflow = 'hidden'

  await nextTick()
  const el = splashRef.value
  if (el) {
    el.addEventListener('animationend', onSplashAnimationEnd)
  }
  // Fallback: re-enable scroll after animation duration (5.5s)
  const fallback = setTimeout(unlockScroll, 5500)
  onUnmounted(() => clearTimeout(fallback))
})

onUnmounted(() => {
  splashRef.value?.removeEventListener('animationend', onSplashAnimationEnd)
  unlockScroll()
})
</script>

<template>
  <div>
    <div
      ref="splashRef"
      class="pointer-events-none absolute top-0 left-0 w-full h-full flex justify-center items-center z-100 splash"
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
  animation: opacity-fade-out 5.5s ease-in-out;
}

@keyframes opacity-fade-out {
  from,
  34% {
    opacity: 1;
  }

  60%,
  to {
    opacity: 0;
  }
}
</style>
