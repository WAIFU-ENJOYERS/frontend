<script setup lang="ts">
defineEmits<{
  (e: "play"): void
}>()
//There is also pinia which does similar thing.
</script>

<template>
    <v-container fluid fill-height class="justify-center mt-16 bg-transparent">
        <v-sheet class="d-flex flex-column align-center bg-transparent">
          <logo></logo>
          <description></description>
          <play_button @play="$emit('play')"></play_button>
        </v-sheet>
    </v-container>
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