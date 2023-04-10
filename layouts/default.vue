<script setup lang="ts">
// There is also pinia which does similar thing.
import { onMounted } from "vue";
function generateRandomBackground() {
  return $fetch("/api/random_background");
}

const background = ref("");
onMounted(async () => {
  const result = await generateRandomBackground();
  background.value = result.url;
});
</script>

<template>
  <v-app>
    <span
      class="bg"
      :style="{ 'background-image': 'url(' + background + ')' }"
    />
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
  background: url("https://media.tenor.com/9ymo67Vq-yoAAAAC/anime-approve.gif")
    no-repeat center center;
  background-size: cover;
  background-color: black;
  transform: scale(1);
}
</style>
