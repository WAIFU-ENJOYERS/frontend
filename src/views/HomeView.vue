<template>
  <v-container fluid fill-height class="justify-center mt-16 bg-transparent">
      <v-sheet class="d-flex flex-column align-center bg-transparent">
        <v-sheet class="flex-column justify-center ma-10 bg-transparent">
          <v-img class="mx-auto align-center" :width="400" src="https://i.postimg.cc/YSHwbFQk/logo1.png"></v-img>
        </v-sheet>
        <v-sheet class="flex-column justify-center ma-5 bg-shades-transparent">
          <p class="align-center text-h3 text-white my-2 font-weight-bold">Which waifu has more likes ? </p>
        </v-sheet>
        <v-sheet class="flex-column justify-center ma-5 bg-shades-transparent">
          <p class="text-white align-center mt-5 justify-center font-weight-bold">
            A game where you guess if a waifu has higher or lower likes than other waifu based <br/>
            on anime list data we collected
          </p>
          </v-sheet>
        <v-sheet class="align-center ma-12 bg-transparent">
          <v-btn
            rounded="pill"
            variant="flat"
            color="success"
            size="x-large"
          >
            <p class="text-button font-weight-bold">Play Game</p>
          </v-btn>
        </v-sheet>
      </v-sheet>
  </v-container>
</template>
