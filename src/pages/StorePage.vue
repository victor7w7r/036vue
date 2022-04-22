<template>
    <h3 class="text-center mt-3">Store Example</h3>
    <p class="text-center mt-3">Write anything in this form and send!</p>
    <form  @submit.prevent="handleSubmit">
        <div class="container">
            <div class="row">
                <div class="col-sm"></div>
                <div class="col-sm">
                    <input type="text" class="form-control mb-4" required v-model="dataValue" placeholder="here" />
                    <div class="d-flex justify-content-center">
                        <button type="submit" class="btn btn-primary text-center">Submit</button>
                    </div>
                        <p class="text-center mt-3" v-if="getState !== ''">Store State: Yes, you write <b>{{ getState }}</b></p>
                        <p class="text-center mt-3" v-else>Store State: Not yet.</p>
                </div>
                <div className="col-sm"></div>
            </div>
        </div>
    </form>
</template>

<script setup lang="ts">

import { useFormChangeState } from "@/composables";

const { handleSubmit, getState, dataValue } = useFormChangeState();

</script>