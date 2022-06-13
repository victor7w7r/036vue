<template>
    <div class="relative">
        <div class="flex items-center justify-center w-full">
            <label htmlFor="checked-toggle" class="inline-flex items-center mb-4 cursor-pointer">
                <input type="checkbox" value="" id="checked-toggle" class="sr-only peer" 
                    :checked="darkMode" @change="toggled"/>
                <div :class="toggleDesign"></div>
                <span class="ml-3 text-sm font-medium adaptable-text select-none">Dark Mode</span>
            </label>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

import { useTheme } from '@/stores';

const themeStore = useTheme();

const darkMode = computed(() => themeStore.getDarkMode);
const togglePeer = computed(() => themeStore.getTogglePeer);

const toggled = (): void => {

    if(darkMode.value) {
        themeStore.setDarkMode(false);
        themeStore.setDarkBackground('bg-white');
        themeStore.setControlBackground('bg-slate-700/30');
        themeStore.setTogglePeer('peer-checked:bg-white');
        document.body.classList.toggle("dark");
    } else {
        themeStore.setDarkMode(true);
        themeStore.setWhiteBackground('dark:bg-zinc-900');
        themeStore.setControlBackground('bg-slate-700/30');
        themeStore.setTogglePeer('peer-checked:bg-dark');
        document.body.classList.toggle("dark");
    }
};

const toggleDesign: string = `${togglePeer.value} w-11 
h-6 bg-gray-200 rounded-full peer transition-colors duration-1000 
peer-focus:ring-0 peer-focus:ring-blue-300 
dark:peer-focus:ring-blue-800 dark:bg-gray-700 
peer-checked:after:translate-x-full 
peer-checked:after:border-white after:content-[''] 
after:absolute after:top-0.5 after:left-[2px] 
after:bg-white after:border-gray-300 after:border 
after:rounded-full after:h-5 after:w-5 after:transition-all 
dark:border-gray-600`;

</script>