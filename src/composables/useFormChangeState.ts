import { computed, ref, ComputedRef } from 'vue';
import { useData } from '../stores/dataStore';

export const useFormChangeState = () => {

    const store = useData();
    const dataValue = ref<string>('');

    const getState: ComputedRef<string> = computed(() => store.getData);

    const handleSubmit = (): void => {
        store.success(dataValue.value);
    };

    return { handleSubmit, getState, dataValue };

};

