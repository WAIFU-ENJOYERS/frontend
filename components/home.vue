<script setup lang="ts">
// There is also pinia which does similar thing.
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
