import { defineStore } from 'pinia';

export const useData = defineStore('data',  {

    state: () => ({
        data: "", 
        loading: false,   
        success: false
    }),
    getters: {
        getData: ( state ) => state.data
    },
    actions: {
        request () {
            this.loading = true;
        },
        fail () {
            this.loading = false;
        },
        success ( payload: string ) {
            this.data = payload;
        }
    }
});