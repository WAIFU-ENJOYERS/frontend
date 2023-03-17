<template>
    <v-app>
      <!-- <h1>Hello World</h1> -->
        <!-- <span class="bg"></span> -->
        <!-- <v-sheet>hellesdasd</v-sheet> -->
        <span class="bg"></span>
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
  transform: scale(1.1);
}
</style>
