import { createStore } from 'vuex';

import type { State } from '../types';

export default createStore<State>({
    state: {
        data: "",
        loading: false,
        success: false
    },
    getters: {
        getData: ( state ) => state.data
    },
    mutations: {
        changeData: ( state, val: string ) => {
            state.data = val;
        }
    },
    actions: {
        request( context ) {},
        fail( context ) {},
        success( {commit}, payload: string ) {
            commit('changeData', payload);
        }
    }
});