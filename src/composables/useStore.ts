import { computed, ref, ComputedRef } from 'vue';
import { useRouter } from 'vue-router';

import { useData, useTheme } from '@/stores';

export const useStore = () => {

    const { push } = useRouter();
    const dataStore = useData();
    const themeStore = useTheme();

    const dataValue = ref<string>('');

    const controlBackground = computed(() => themeStore.getControlBackground);
    const data: ComputedRef<string> = computed(() => dataStore.getData);

    const handleSubmit = (): void => dataStore.success(dataValue.value);
    
    const changeToHome = (): void => {
        push({ name: 'home' });
    };
    
    return { handleSubmit, data, dataValue, controlBackground, changeToHome };

};

