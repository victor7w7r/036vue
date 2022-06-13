<template>
    <div class="flex items-center justify-center">
        <nav :class="`navbar ${controlBackground}`">
            <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div class="flex items-center justify-between">
                    <div class="flex-1 flex items-stretch justify-start">
                        <div class="flex-shrink-0 flex items-center">
                            <img :src="logo" class="block h-8 w-auto mr-5" alt="" />
                            <router-link :to="{ name: 'home' }" class="font-medium adaptable-text">Vue + TS Template</router-link>
                        </div>
                    </div>
                    <div class="items-center mt-4 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <DarkModeToggler />
                    </div>
                </div>
            </div>
        </nav>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useTheme } from '@/stores';

import DarkModeToggler from './DarkModeToggler.vue';
import logo from '../assets/logo.png';

const themeStore = useTheme();
const controlBackground = computed(() => themeStore.getControlBackground);
</script>