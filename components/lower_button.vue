<template>
  <v-btn
    rounded="pill"
    variant="flat"
    color="error"
    size="x-large"
    class="mt-5"
    @click="$emit('guess', 'lower')"
  >
    <p class="text-button font-weight-bold">
      <v-icon icon="mdi-menu-down" /> Lower
    </p>
  </v-btn>
</template>

<script setup lang="ts"></script>
