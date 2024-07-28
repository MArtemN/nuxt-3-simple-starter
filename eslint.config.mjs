import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt({
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
		'vue/block-order': [
			'error',
			{
				order: ['script[setup]', 'template', 'style'],
			},
		],
		'no-console': ['error', { allow: ['warn', 'error'] }],
	},
});
