import { useSubscription } from '@vueuse/rxjs';

import { useData, useTheme } from '~/stores';

import { binanceAll$ } from '~/api/binance';
import type { TBinance } from '~/types';

export const useHome = () => {

    const isLoading = ref<boolean>(true);
    const bin = ref<TBinance>();

    const { push } = useRouter();
    const dataStore = useData();
    const themeStore = useTheme();

    const controlBackground = computed(() => themeStore.getControlBackground);
    const darkMode = computed(() => themeStore.getDarkMode);
    const data = computed(() => dataStore.getData);

    const blueChange = (): void => { 
        if(darkMode.value) {
            themeStore.setDarkBackground("dark:bg-sky-900");
            themeStore.setControlBackground('bg-sky-700/30');
            themeStore.setTogglePeer('peer-checked:bg-sky-500');
        } else {
            themeStore.setWhiteBackground("bg-sky-300");
            themeStore.setControlBackground('bg-sky-700/30');
            themeStore.setTogglePeer('peer-checked:bg-sky-300');
        }
    };

    const purpleChange = (): void => {
        if(darkMode.value) {
            themeStore.setDarkBackground("dark:bg-purple-900");
            themeStore.setControlBackground('bg-purple-700/30');
            themeStore.setTogglePeer('peer-checked:bg-purple-500');
        } else {
            themeStore.setWhiteBackground("bg-purple-300");
            themeStore.setControlBackground('bg-purple-700/30');
            themeStore.setTogglePeer('peer-checked:bg-purple-300');
        }
    };

    const redChange = (): void => {
        if(darkMode.value) {
            themeStore.setDarkBackground("dark:bg-red-900");
            themeStore.setControlBackground('bg-red-700/30');
            themeStore.setTogglePeer('peer-checked:bg-red-500');
        } else {
            themeStore.setWhiteBackground("bg-red-300");
            themeStore.setControlBackground('bg-red-700/30');
            themeStore.setTogglePeer('peer-checked:bg-red-300');
        }
    };

    const emeraldChange = (): void => {
        if(darkMode.value) {
            themeStore.setDarkBackground("dark:bg-emerald-900");
            themeStore.setControlBackground('bg-emerald-700/30');
            themeStore.setTogglePeer('peer-checked:bg-emerald-300');
        } else {
            themeStore.setWhiteBackground("bg-emerald-300");
            themeStore.setControlBackground('bg-emerald-700/30');
            themeStore.setTogglePeer('peer-checked:bg-emerald-500');
        }
    };

    const changeToStore = (): void => {
        push({ name: 'store' });
    };

    useSubscription(binanceAll$.subscribe( data => {
        bin.value = data.find(curr => curr.symbol === 'BTCUSDT');
        isLoading.value = false;
    }));

    return {
        data, bin, isLoading, darkMode, 
        controlBackground, blueChange, purpleChange, 
        redChange, emeraldChange , changeToStore
    };

};

