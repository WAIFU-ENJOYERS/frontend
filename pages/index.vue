<script setup lang="ts">
import { ref } from 'vue'
const playState = ref(0)
function play () {
  playState.value = 1
}
</script>

<template>
  <home
    v-if="playState === 0"
    @play="play"
  />
  <play_page v-else />
</template>
