import { computed, ref, ComputedRef } from 'vue';
import { Store, useStore } from 'vuex';

import type { State } from '../types';

export const useFormChangeState = () => {

    const store: Store<State> = useStore();
    const dataValue = ref<string>('');

    const getState: ComputedRef<string> = computed( () => store.getters['getData'] )

    const handleSubmit = (): void => {
        store.dispatch('success', dataValue.value);
    };

    return { handleSubmit, getState, dataValue };

};

