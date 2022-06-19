<template>
    <Head>
        <Title>036nuxt</Title>
    </Head>
    <Body class="antialiased dark">
        <div :class="`h-screen transition-colors duration-1000 ${whiteBackground} ${darkBackground}`" >
            <NuxtLayout><NuxtPage/></NuxtLayout>
            <Header />
        </div>
    </Body>
</template>

<script setup lang="ts">
import { useTheme } from '~/stores';
const themeStore = useTheme();

onMounted(() => {
    const isDark: boolean = document.body.classList.contains("dark");
    isDark ? themeStore.setDarkMode(true) : themeStore.setDarkMode(false);
});

const whiteBackground = computed(() => themeStore.getWhiteBackground);
const darkBackground = computed(() => themeStore.getDarkBackground);
</script>