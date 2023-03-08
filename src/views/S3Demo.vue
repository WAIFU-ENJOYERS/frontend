<template>
    <v-container bg-transparent>
        <v-card :class="['flat d-flex flex-column align-center justify-center bg-transparent', `elevation-${0}`]" height="100%">
            <h1>{{ data.text }}</h1>
            <v-img width="1280" :src=data.gif></v-img>
        </v-card>
    </v-container>
</template>
<script lang="ts">
import axios from 'axios'
export default {
    name: 's3demo',
    data() {
        return {
            data: []
        }
    },
    mounted() {
        this.get_data();
    },
    methods: {
        get_data() {
            axios({
                method: 'get',
                url: ' http://localhost:8000/s3',
            }).then(response => this.data = response.data);
        }
    }
};
</script>