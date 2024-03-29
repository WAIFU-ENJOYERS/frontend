<template>
  <v-container bg-transparent class="ma-0 pa-0 fill-height" fluid>
    <span v-if="backgroundState === 1" class="bg2" />
    <v-row class="ma-0 pa-0 fill-height">
      <Transition name="slide-left" @after-leave="onAfterLeave">
        <v-col
          v-if="show"
          xs12
          md6
          cols="12"
          xs="12"
          md="6"
          class="ma-0 pa-0 bg1"
          :style="{ 'background-image': 'url(' + waifu1.url + ')' }"
        >
          <v-card
            :class="[
              didLose
                ? 'loseGameLeft flat d-flex flex-column bg-transparent'
                : 'flat d-flex flex-column bg-transparent',
              `elevation-${0}`,
            ]"
            height="100%"
          >
            <v-card
              flat
              class="bg-transparent justify-center d-flex flex-column fill-height"
            >
              <p class="text-white text-h2 font-weight-bold mt-1">
                "{{ waifu1.name }}"
              </p>
              <p class="text-white">has</p>
              <p
                data-testid="left-likes"
                class="text-yellow-accent-3 text-h3 font-weight-bold mt-1"
              >
                {{ waifu1.likes }}
              </p>
              <p class="text-white">likes</p>
            </v-card>
            <v-card flat class="bg-transparent d-flex align-xl-start mt-auto"
              ><p data-testid="score-value" class="text-white font-weight-bold">
                Score: <Score></Score></p
            ></v-card>
          </v-card>
        </v-col>
      </Transition>

      <Transition name="slide-right">
        <v-col
          v-if="show"
          xs12
          md6
          cols="12"
          xs="12"
          md="6"
          class="ma-0 pa-0 bg1"
          :style="{ 'background-image': 'url(' + waifu2.url + ')' }"
        >
          <v-card
            :class="[
              didLose
                ? 'loseGameRight flat d-flex flex-column align-center justify-center bg-transparent'
                : 'flat d-flex flex-column align-center justify-center bg-transparent',
              `elevation-${0}`,
            ]"
            height="100%"
          >
            <p class="text-white text-h2 font-weight-bold mt-2">
              "{{ waifu2.name }}"
            </p>
            <higher-button
              v-if="guessedState === 0"
              data-testid="higher-button"
              @guess="guess"
            ></higher-button>
            <lower-button
              v-if="guessedState === 0"
              data-testid="lower-button"
              @guess="guess"
            ></lower-button>
            <p v-if="guessedState === 1" class="text-white">has</p>
            <p
              v-if="guessedState === 1"
              data-testid="right-likes"
              class="text-yellow-accent-3 text-h3 font-weight-bold mt-1"
            >
              {{ waifu2.likes }}
            </p>
            <p v-if="guessedState === 1" class="text-white">likes</p>
          </v-card>
        </v-col>
      </Transition>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { $fetch } from "ofetch";
import { store } from "./store";

const emit = defineEmits(["end"]);
const guessedState = ref(0);
const correctGuess = ref(0);
const backgroundState = ref(0);
const show = ref(true);
const didLose = ref(false);

/*eslint-disable */
definePageMeta({
  layout: false,
});
/* eslint-enable */
const waifu1 = ref({
  name: "",
  likes: 0,
  url: "",
});
const waifu2 = ref({
  name: "",
  likes: 0,
  url: "",
});
const waifu3 = ref({
  name: "",
  likes: 0,
  url: "",
});
onMounted(async () => {
  store.score = 0;
  const result = await generateRandomWaifu();
  waifu1.value.name = result.name;
  waifu1.value.likes = result.likes;
  waifu1.value.url = result.image_url;
  const result2 = await generateRandomWaifu();
  waifu2.value.name = result2.name;
  waifu2.value.likes = result2.likes;
  waifu2.value.url = result2.image_url;
  const result3 = await generateRandomWaifu();
  waifu3.value.name = result3.name;
  waifu3.value.likes = result3.likes;
  waifu3.value.url = result3.image_url;
});

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function incrementScore() {
  store.increment();
}

const onAfterLeave = () => {
  transitionNewWaifu();
  show.value = true;
};

function generateRandomWaifu() {
  return $fetch("/api/random_waifu");
}

async function transitionNewWaifu() {
  waifu1.value.name = waifu2.value.name;
  waifu1.value.likes = waifu2.value.likes;
  waifu1.value.url = waifu2.value.url;

  waifu2.value.name = waifu3.value.name;
  waifu2.value.likes = waifu3.value.likes;
  waifu2.value.url = waifu3.value.url;

  const newWaifu = await generateRandomWaifu();
  waifu3.value.name = newWaifu.name;
  waifu3.value.likes = newWaifu.likes;
  waifu3.value.url = newWaifu.image_url;
}

async function winGame() {
  correctGuess.value = 1;
  backgroundState.value = 1;
  await sleep(500);
  incrementScore();

  show.value = !show.value;
  guessedState.value = 0;
  // await sleep(3000)
  // backgroundState.value = 0  -> To change from correct bg back to normal but might not be needed
}

async function loseGame() {
  correctGuess.value = 0;
  didLose.value = true;

  await sleep(1900);
  emit("end");
}

async function guess(guessState) {
  guessedState.value = 1;
  if (
    (guessState === "higher" && waifu2.value.likes >= waifu1.value.likes) ||
    (guessState === "lower" && waifu2.value.likes < waifu1.value.likes)
  ) {
    await winGame();
  } else {
    await loseGame();
  }
}
</script>

<style scoped>
.display {
  overflow: hidden;
}

p {
  display: table-cell;
  vertical-align: middle;
  text-align: center;
}

.loseGameLeft {
  background: url("../assets/cleanCross.png") no-repeat top left;
  background-size: 17%;
}

.loseGameRight {
  background: url("../assets/cleanCross.png") no-repeat bottom right;
  background-size: 17%;
}

.bg1 {
  background: center center;
  background-size: cover;
  background-color: black;
  transform: scale(1);
  /* position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0; */
}
.bg1:before {
  content: " ";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.4);
}
/* .slide-left-enter-active {
        animation: slide-left-in 1.5s ease-in;
    }
    .slide-left-leave-active {
        animation: slide-left-out 1.5s ease-in;
    }

    @keyframes slide-left-in{
        from  { transform: translateX(-100%);}
        to { transform: translateX(0);}
    }
    @keyframes slide-left-out{
        from  { transform: translateX(0%);}
        to { transform: translateX(100%);}
    }

    .slide-right-enter-active {
        animation: slide-right-in 1.5s ease-in;
    }
    .slide-right-leave-active {
        animation: slide-right-out 1.5s ease-in;
    }
    @keyframes slide-right-out{
        from  { transform: translateX(0%);}
        to { transform: translateX(-100%);}
    }
    @keyframes slide-right-in{
        from  { transform: translateX(100%);}
        to { transform: translateX(0);}
    } */

/* door open and close transition */
.slide-left-enter-active {
  animation: slide-left-in 1.5s ease-in;
}
.slide-right-leave-active {
  animation: slide-left-out 1.5s ease-in;
}

@keyframes slide-left-in {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}
@keyframes slide-left-out {
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(100%);
  }
}

.slide-right-enter-active {
  animation: slide-right-in 1.5s ease-in;
}
.slide-left-leave-active {
  animation: slide-right-out 1.5s ease-in;
}
@keyframes slide-right-out {
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(-100%);
  }
}
@keyframes slide-right-in {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
}
</style>
