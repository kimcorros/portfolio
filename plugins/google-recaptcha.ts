import { VueReCaptcha } from 'vue-recaptcha-v3';

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(VueReCaptcha, {
        siteKey: '6LebRegoAAAAACMu6PjT0nLgCPczdGBfxElNJ5MP',
        loaderOptions: {
            autoHideBadge: false,
            explicitRenderParameters: {
            },
        },
    });
});