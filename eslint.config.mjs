import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt().override("nuxt/typescript/rules", {
	rules: {
		"vue/html-self-closing": [
			"error",
			{
				html: {
					void: "always",
					normal: "always",
					component: "always",
				},
				svg: "always",
				math: "always",
			},
		],
	},
});
