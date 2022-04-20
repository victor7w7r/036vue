<template>
    <h3 class="text-center mt-3">Happy Hacking! with Typescript?</h3>
    <p class="text-center mt-3 roboto">SCSS is working? Yes, with Roboto</p>
    <p class="text-center mt-3" v-if="getState !== ''">Store State: Yes, you write <b>{{ getState }}</b></p>
    <p class="text-center mt-3" v-else>Store State: Not yet.</p>
    <div class="row mt-4">
        <div class="col-sm"></div>
        <div class="col-sm">
            <h4 class="text-center mt-3">Made with love by</h4>
            <div class="d-flex justify-content-center">
                <img src="../assets/brand.png" alt=""/>
            </div>
        </div>
        <div class="col-sm"></div>
    </div>
    <div class="container">
        <div class="row d-flex justify-content-center">
            <div class="col-3">
                <h3 class="text-center mt-3">Lets see bitcoin price</h3>
                <br />
                <p class='text-center' v-if="isLoading">Loading...</p>  
                <template v-else>
                    <p class='text-center'>Symbol: {{ bin.symbol }} </p>
                    <p class='text-center'>Price: {{ bin.askPrice }} </p>
                </template>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

import { useBinanceAndState } from "../composables";

const { getState, isLoading, bin } = useBinanceAndState();

</script>

<style scoped lang="scss">
@import "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"; 
.roboto {
    font-family: 'Roboto', sans-serif;
}
</style>