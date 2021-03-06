module.exports = {
	siteName: "LogChimp",
	siteDescription: "Track user feedback to build better products",
	siteUrl: "https://logchimp.codecarrot.net/",
	titleTemplate: "%s | LogChimp",
	css: {
		split: true
	},

	plugins: [
		{
			use: "@gridsome/vue-remark",
			options: {
				typeName: "DocPage",
				baseDir: "./docs",
				pathPrefix: "/docs",
				template: "./src/templates/Docs.vue",
				index: ["readme"],
				plugins: [
					"@gridsome/remark-prismjs"
				]
			}
		}
	]
}
