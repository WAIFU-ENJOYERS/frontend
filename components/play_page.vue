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
            </v-card>
          </v-col>
          <v-col xs12 md6 cols="12" xs="12" md="6" class="ma-0 pa-0 bg1" v-bind:style="{ 'background-image': 'url(' + waifu2.url + ')' }">
                <v-card
                    :class="['flat d-flex flex-column align-center justify-center bg-transparent', `elevation-${0}`]"
                    height="100%">
                    <p class="text-white text-h2 font-weight-bold mt-2">"{{ waifu2.name }}"</p>
                    <higher-button></higher-button>
                    <lower-button></lower-button>
                </v-card>
          </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { $fetch } from 'ofetch'
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
const displayWaifus = ref([])
onMounted(async () => {
  const result = await $fetch('/api/random_waifu')
  console.log(result)
  waifu1.value.name = result.name
  waifu1.value.likes = result.likes
  waifu1.value.url = result.image_url
  displayWaifus.value.push(waifu1)
  const result2 = await $fetch('/api/random_waifu')
  console.log(result2)
  waifu2.value.name = result2.name
  waifu2.value.likes = result2.likes
  waifu2.value.url = result2.image_url
  displayWaifus.value.push(waifu2)
})
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
.h1 {

}
</style>
