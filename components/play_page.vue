<template>
    <v-container bg-transparent class="ma-0 pa-0 fill-height" fluid>
        <v-row class="ma-0 pa-0 fill-height">
          <v-col xs12 md6 cols="12" xs="12" md="6" class="ma-0 pa-0 bg1"
              v-bind:style="{ 'background-image': 'url(' + waifu1.url + ')' }">
            <v-card
                :class="['flat d-flex flex-column align-center justify-center bg-transparent', `elevation-${0}`]"
                height="100%">
                <p class="text-white text-h2 font-weight-bold mt-1">"{{ waifu1.name }}"</p>
                <p class="text-white"> has </p>
                <p class="text-yellow-accent-3 text-h3 font-weight-bold mt-1">{{ waifu1.likes }}</p>
                <p class="text-white"> likes </p>
            </v-card>
          </v-col>
          <v-col xs12 md6 cols="12" xs="12" md="6" class="ma-0 pa-0 bg1" v-bind:style="{ 'background-image': 'url(' + waifu2.url + ')' }">
                <v-card
                    :class="['flat d-flex flex-column align-center justify-center bg-transparent', `elevation-${0}`]"
                    height="100%">
                    <p class="text-white text-h2 font-weight-bold mt-2">"{{ waifu2.name }}"</p>
                    <higher-button @guess="guess" v-if="guessedState === 0"></higher-button>
                    <lower-button @guess="guess" v-if="guessedState === 0"></lower-button>
                    <p class="text-yellow-accent-3 text-h3 font-weight-bold mt-1" v-if="guessedState === 1">{{ waifu2.likes }}</p>
                    <p class="text-white font-weight-bold"> likes than {{ waifu1.name }}</p>
                </v-card>
          </v-col>
        </v-row>
    </v-container>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { $fetch } from "ofetch";

const guessedState = ref(0)
const correctGuess = ref(0)
/*eslint-disable */
definePageMeta({
  layout: false
}) 
/* eslint-enable */
const waifu1 = ref({
  name: '',
  likes: 0,
  url: ''
})
const waifu2 = ref({
  name: '',
  likes: 0,
  url: ''
})
onMounted(async () => {
  const result = await generateRandomWaifu()
  waifu1.value.name = result.name
  waifu1.value.likes = result.likes
  waifu1.value.url = result.image_url
  const result2 = await generateRandomWaifu()
  waifu2.value.name = result2.name
  waifu2.value.likes = result2.likes
  waifu2.value.url = result2.image_url
})

function generateRandomWaifu() {
  return $fetch('/api/random_waifu')
}

async function transitionNewWaifu() {
  waifu1.value.name = waifu2.value.name
  waifu1.value.likes = waifu2.value.likes
  waifu1.value.url = waifu2.value.url

  const newWaifu = await generateRandomWaifu()
  waifu2.value.name = newWaifu.name
  waifu2.value.likes = newWaifu.likes
  waifu2.value.url = newWaifu.image_url

}
function guess (guessState) {
  guessedState.value = 1
  console.log(guessState)
  if ((guessState === "higher" && waifu2.value.likes >= waifu1.value.likes)
    || (guessState === "lower" && waifu2.value.likes < waifu1.value.likes)) {
    correctGuess.value = 1
    console.log("correct")
    transitionNewWaifu()
    guessedState.value = 0
  }
  else {
    correctGuess.value = 0
    console.log("wrong")
  }
}
</script>

<style>
.bg1 {
  background: center center;
  background-size: cover;
  background-color: black;
  transform: scale(1);
}
.bg1:before {
  content: " ";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0,0,0,.4);
}
</style>
