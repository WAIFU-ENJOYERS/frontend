<script setup lang="ts">
  import { ref } from 'vue';
  const play_state = ref(0);
  function play() {
    play_state.value = 1
  }
</script>
<template>
    <home v-if="play_state === 0" @play="play"></home>
    <play_page v-else></play_page>
</template>