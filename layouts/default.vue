<script setup lang="ts">
// There is also pinia which does similar thing.
import { ref } from 'vue'
const backgroundState = ref(0)
</script>

<template>
  <v-app>
    <span class="bg"/>
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
  background: url('https://giffiles.alphacoders.com/134/13493.gif') no-repeat center center;
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
  /*
  background: url('https://media.tenor.com/Hw7f-4l0zgEAAAAC/check-green.gif') no-repeat center center;
  */
  background-size: cover;
  background-color: black;
  transform: scale(1);
}
.bg3 {
  width: 100%;
  height: 100%;
  position: absolute;
  filter: blur(5px) grayscale(50%) brightness(50%);
  top: 0;
  left: 0;
  background: url('https://i.pinimg.com/originals/53/73/66/5373667e873a4591d76250220bf3615a.gif') no-repeat center center;
  background-size: cover;
  background-color: black;
  transform: scale(1);
}
</style>
