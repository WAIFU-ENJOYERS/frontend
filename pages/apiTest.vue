<template>
  <v-container bg-transparent>
      <v-card :class="['flat d-flex flex-column align-center justify-center bg-transparent', `elevation-${0}`]"
          height="100%">
          <h1>{{ name }}</h1>
          <v-img width="500" aspect-ratio="1" :src=url></v-img>
      </v-card>
  </v-container>
</template>

<script setup>
const name = ref();
const likes = ref();
const url = ref();
onMounted(async () => {
  const { result } = await $fetch(`/api/random_waifu`);
  console.log(result)
  name.value = result.name
  likes.value = result.likes
  url.value = result.image_url
});
</script>