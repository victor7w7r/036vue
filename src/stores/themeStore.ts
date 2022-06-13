import { defineStore } from 'pinia';

export const useTheme = defineStore('theme',  {

    state: () => ({
        darkMode: false,
        whiteBackground: 'bg-white',
        darkBackground: 'dark:bg-zinc-900',
        controlBackground: 'bg-slate-700/30',
        togglePeer: ''
    }),
    getters: {
        getDarkMode: state => state.darkMode,
        getWhiteBackground: state => state.whiteBackground,
        getDarkBackground: state => state.darkBackground,
        getControlBackground: state => state.controlBackground,
        getTogglePeer: state => state.togglePeer
    },
    actions: {
        setDarkMode (darkMode: boolean) {
            this.darkMode = darkMode;
        },
        setWhiteBackground (whiteBackground: string) {
            this.whiteBackground = whiteBackground;
        },
        setDarkBackground (darkBackground: string) {
            this.darkBackground = darkBackground;
        },
        setControlBackground (controlBackground: string) {
            this.controlBackground = controlBackground;
        },
        setTogglePeer (togglePeer: string) {
            this.togglePeer = togglePeer;
        },
    }
});