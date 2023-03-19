<template>
    <v-container bg-transparent>
        <v-row>
            <v-col xs12 md6 cols="12" xs="12" md="6" class="ma-0 pa-0">
                <v-img width="500" cover aspect-ratio="1" :src=waifu1.url ></v-img>
            </v-col>
            <v-col xs12 md6 cols="12" xs="12" md="6" class="ma-0 pa-0">
                <v-img width="500" cover aspect-ratio="1" :src=waifu2.url></v-img>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { $fetch } from 'ofetch'
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
  const result = await $fetch('/api/random_waifu')
  console.log(result)
  waifu1.value.name = result.name
  waifu1.value.likes = result.likes
  waifu1.value.url = result.image_url
  const result2 = await $fetch('/api/random_waifu')
  waifu2.value.name = result2.name
  waifu2.value.likes = result2.likes
  waifu2.value.url = result2.image_url
})
</script>
