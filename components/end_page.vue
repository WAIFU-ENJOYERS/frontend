<template>
  <v-card flat class="bg-transparent d-flex align-center justify-center text-white fill-height">
    <div class="game-end">
      <div class="game-end__wrapper">
        <!-- TO BE ADDED: Currently these are all placeholder texts -->
        <div class="game-end-score-wrapper"><p class="game-end-score">You scored:
          <span class="game-end-score__score"><Score></Score></span></p>
        </div>
        <v-btn @click="$emit('homepage')" class="game-end-button" rounded="pill" variant="flat" color="orange" size="x-large">
          <p class="text-button font-weight-bold text-white">Back to menu</p>
        </v-btn>
        <v-btn @click="$emit('play')" class="mx-5 my-5 game-end-button" rounded="pill" variant="flat" color="success" size="x-large">
          <p class="text-button font-weight-bold">Play again</p>
        </v-btn>
      </div>
    </div>
  </v-card>
</template>

<script setup>
</script>

<style scoped>

.game-end-button {
  width: 200px
}

.game-end {
  display: table;
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: cover;
  width: 100%;
  height: 100%;
  text-align: center;
}

.game-end__wrapper {
  display: table-cell;
  vertical-align: middle;
  padding: 1.875rem 1.25rem
}

.game-end-score-wrapper {
  margin-bottom: 20px;
  padding: 0 10px
}

.game-end-score {
  line-height: 1.4;
  font-size: 1.125rem;
  font-weight: 700;
  margin: 0 auto 20px;
  width: 90%
}

.game-end-score__score {
  display: block;
  font-size: 3.75rem;
  line-height: 3.5rem;
  color: #fff989
}
</style>
