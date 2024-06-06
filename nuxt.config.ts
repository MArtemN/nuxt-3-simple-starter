// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: {
		enabled: true,
	},
	typescript: {
		typeCheck: true,
	},
	css: ['@/assets/styles/main.scss'],
	modules: ['@nuxt/eslint', '@pinia/nuxt', '@nuxtjs/tailwindcss', 'nuxt-swiper'],
})
