<script setup lang="ts">
// There is also pinia which does similar thing.
import { onMounted } from 'vue'
function generateRandomBackground() {
  return $fetch('/api/random_background')
}

const background = ref("")
onMounted(async () => {
    const result = await generateRandomBackground()
    background.value = result.url
})

</script>

<template>
  <v-app>
    <span class="bg"
    v-bind:style="{ 'background-image': 'url(' + background + ')' }"/>
    <slot />
  </v-app>
</template>

<style>
.bg {
  width: 100%;
  height: 100%;
  position: absolute;
  filter: blur(5px) grayscale(50%) brightness(50%);
  top: 0;
  left: 0;
  background: no-repeat center center;
  background-size: cover;
  background-color: black;
  transform: scale(1);
}
.bg2 {
  width: 100%;
  height: 100%;
  position: absolute;
  filter: blur(5px) grayscale(50%) brightness(50%);
  top: 0;
  left: 0;
  background: url('https://w0.peakpx.com/wallpaper/768/175/HD-wallpaper-check-mark-neon-icon-green-background-neon-symbols-check-mark-neon-icons-check-mark-sign-computer-signs-check-mark-icon-computer-icons.jpg') no-repeat center center;
  background-size: cover;
  background-color: black;
  transform: scale(1);
}
</style>
