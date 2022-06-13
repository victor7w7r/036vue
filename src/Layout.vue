<template>
    <div :class="`h-screen transition-colors duration-1000 ${whiteBackground} ${darkBackground}`" >
        <router-view />
        <Header />
    </div>
</template>

<script setup lang="ts">
import { onMounted, computed } from 'vue';

import { useTheme } from '@/stores';
import Header from './components/Header.vue';

const themeStore = useTheme();

onMounted(() => {
    const isDark: boolean = document.body.classList.contains("dark");
    isDark ? themeStore.setDarkMode(true) : themeStore.setDarkMode(false); 
});

const whiteBackground = computed(() => themeStore.getWhiteBackground);
const darkBackground = computed(() => themeStore.getDarkBackground);

</script>