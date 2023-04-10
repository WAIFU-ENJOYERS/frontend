# Higher or Lower: Waifu Edition

## Demo website: https://frontend-red-phi.vercel.app/

## Introduction

We turned the original game higher or lower and added our own twist by instead of guessing if a term has a higher google search than other, we guess if a waifu has more likes than other, we got this data from a popular website MyAnimeList ~~definitely not rigged~~.

Source of our data:  https://www.kaggle.com/datasets/andreuvallhernndez/myanimelist-jikan?select=characters.csv

<b> Remark </b>: A lot of preprocess happened to filter out nsfw waifus to keep our website <b> PG </b>

## Preview of the website

#### Hompage 

![homepage](/assets/home-page.png)


#### Play Page

![homepage](/assets/play-page.png)


#### Return Page / End Game Page

![homepage](/assets/end-page.png)



# To run our project

## Setup

Make sure to install the dependencies:

```bash
npm install
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
# or
nuxt dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

## Test

To run our unit tests 

```bash
npm run test
```

To run our E2E tests

```bash
npx playwright test
```


