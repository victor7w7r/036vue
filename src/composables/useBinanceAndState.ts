import { computed, ref, onMounted, ComputedRef } from 'vue';
import { Store, useStore } from 'vuex';

import type { TBinance, State } from '../types';

import { binanceData } from '../api/binance';

export const useBinanceAndState = () => {

    const isLoading = ref<boolean>(true);
    const bin = ref<TBinance>();
    const store: Store<State> = useStore();

    const getState: ComputedRef<string> = computed( () => store.getters['getData'] )

    const getCurrencies = async() => {
        const resp = await binanceData.get<TBinance[]>('');
        bin.value = resp.data.find(curr => curr.symbol === 'BTCUSDT');
        isLoading.value = false;
    };

    onMounted(() => getCurrencies());

    return { getState, isLoading, bin };

};

