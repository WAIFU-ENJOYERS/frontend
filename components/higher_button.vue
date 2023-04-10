<template>
  <v-btn
    rounded="pill"
    variant="flat"
    color="success"
    size="x-large"
    class="mt-5"
    @click="$emit('guess', 'higher')"
  >
    <p class="text-button font-weight-bold">
      <v-icon icon="mdi-menu-up" />Higher
    </p>
  </v-btn>
</template>

<script setup lang="ts"></script>
