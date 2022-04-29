import { computed, ComputedRef, ref } from 'vue';
import { useSubscription } from '@vueuse/rxjs';

import { useData } from '@/stores/dataStore';

import { binanceAll$ } from '@/api/binance';
import { TBinance } from '@/types';

export const useBinanceAndState = () => {

    const isLoading = ref<boolean>(true);
    const bin = ref<TBinance>();

    const store = useData();
    const getState: ComputedRef<string> = computed(() => store.getData);

    useSubscription(binanceAll$.subscribe( data => {
        bin.value = data.find(curr => curr.symbol === 'BTCUSDT');
        isLoading.value = false;
    }));


    return { getState, bin, isLoading };

};

