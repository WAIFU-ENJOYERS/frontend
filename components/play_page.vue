<template>
    <v-container bg-transparent class="ma-0 pa-0 fill-height" fluid>
        <v-row  class="ma-0 pa-0 fill-height">
                <v-col v-for="waifu in displayWaifus" xs12 md6 cols="12" xs="12" md="6" class="ma-0 pa-0 bg1"
                    v-bind:style="{ 'background-image': 'url(' + waifu.value.url + ')' }">
                    <v-card
                        :class="['flat d-flex flex-column align-center justify-center bg-transparent', `elevation-${0}`]"
                        height="100%">
                        <h1>{{ waifu.value.name }}</h1>
                        <h1>{{ waifu.value.likes }}</h1>
                    </v-card>
                </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { $fetch } from 'ofetch'
import { definePageMeta } from '~~/.nuxt/imports'
definePageMeta({
  layout: false
})
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
</style>
