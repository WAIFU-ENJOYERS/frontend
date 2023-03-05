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
  top: 0;
  left: 0;
  background: url('https://giffiles.alphacoders.com/134/13493.gif') no-repeat center center;
  background-size: cover;
  background-color: black;
  transform: scale(1.1);
}
</style>
