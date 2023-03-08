<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <span class="bg"></span>
  <v-app>
    <RouterView />
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
  transform: scale(1.1);
}
</style>
