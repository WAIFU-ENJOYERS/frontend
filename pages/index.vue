<template>
    <v-container fluid fill-height class="justify-center mt-16 bg-transparent">
        <v-sheet class="d-flex flex-column align-center bg-transparent">
          <v-sheet class="flex-column justify-center ma-10 bg-transparent">
            <!-- <h1>asdasdqweq</h1> -->
            <!-- <v-sheet rounded :height="250" :width="250"></v-sheet> -->
            <!-- <v-text class="flex-column justify-center ma-10 bg-transparent" text=".asdasd.."></v-text> -->
            <v-img class="mx-auto align-center" :width="400" src="https://i.postimg.cc/YSHwbFQk/logo1.png"></v-img>
          </v-sheet>
          <!-- <v-sheet class="flex-column justify-center ma-5 bg-shades-transparent"> -->
            <v-card :class="['flat d-flex flex-column align-center justify-center bg-transparent', `elevation-${0}`]">
            <p class="align-center text-h3 text-white my-2 font-weight-bold">Which waifu has more likes ? </p>
            </v-card>
          <!-- </v-sheet> -->
          <!-- <v-sheet class="flex-column justify-center ma-5 bg-shades-transparent"> -->
            <v-card :class="['flat d-flex flex-column align-center justify-center bg-transparent', `elevation-${0}`]">
            <p class="text-white align-center mt-5 justify-center font-weight-bold">
              A game where you guess if a waifu has higher or lower likes than other waifu based <br/>
              on anime list data we collected
            </p>
            </v-card>
            <!-- </v-sheet> -->
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

<script setup>

</script>

  
<style>
.bg {
  width: 100%;
  height: 100%;
  position: absolute;
  filter: blur(5px) grayscale(50%) brightness(50%);
  top: 0;
  left: 0;
  background: url('https://giffiles.alphacoders.com/134/13493.gif') no-repeat center center;
  background-size: cover;
  background-color: black;
  transform: scale(1.1);
}
</style>