<script setup lang="ts">
import { ref } from "vue";
const playState = ref(0);

function homepage() {
  // Cannot name this home for some reason
  playState.value = 0;
}

function play() {
  playState.value = 1;
}

function end() {
  playState.value = 2;
}
</script>

<template>
  <home v-if="playState === 0" @play="play" />
  <end-page
    v-else-if="playState === 2"
    @play="play"
    @homepage="homepage"
  ></end-page>
  <play_page v-else @end="end" />
</template>
