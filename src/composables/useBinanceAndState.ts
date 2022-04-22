import { computed, ref, onMounted, ComputedRef } from 'vue';

import type { TBinance } from '@/types';

import { binanceData } from '@/api/binance';
import { useData } from '@/stores/dataStore';

export const useBinanceAndState = () => {

    const isLoading = ref<boolean>(true);
    const bin = ref<TBinance>();
    const store = useData();

    const getState: ComputedRef<string> = computed(() => store.getData);

    const getCurrencies = async() => {
        const resp = await binanceData.get<TBinance[]>('');
        bin.value = resp.data.find(curr => curr.symbol === 'BTCUSDT');
        isLoading.value = false;
    };

    onMounted(() => getCurrencies());

    return { getState, isLoading, bin };

};

