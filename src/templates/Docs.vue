<template>
	<Layout>
		<div class="inner">
			<div class="docs">
				<aside class="docs-links">
					<docs-sidebar :links="links" />
				</aside>
				<main class="docs-content">
					<header>
						<h1>{{ $page.doc.title }}</h1>
					</header>
					<VueRemarkContent class="markdown" />
				</main>
			</div>
		</div>
	</Layout>
</template>

<script>
// data
import links from "@/data/doc-links.yaml";

// components
import Header from "../layouts/partials/Header";
import DocsSidebar from "../components/DocsSidebar";

export default {
	name: "Docs",
	components: {
		Header,
		DocsSidebar
	},
	computed: {
		links() {
			return links;
		}
	},
	metaInfo() {
		return {
			title: `${this.$page.doc.title} | Documentation `,
			description: this.$page.doc.description,
			meta: [
				{
					name: "robots",
					content: "index, follow"
				},

				// Facebook
				{
					property: "og:site_name",
					content: "LogChimp"
				},
				{
					property: "og:type",
					content: "website"
				},
				{
					name: "og:image",
					content: "https://logchimp.codecarrot.net/images/logchimp-social.png"
				},

				// Twitter
				{
					name: "twitter:image",
					content: "https://logchimp.codecarrot.net/images/logchimp-social.png"
				},
				{
					name: "twitter:site",
					content: "@logchimp"
				},
				{
					name: "twitter:card",
					content: "summary_large_image"
				}
			],
			link: [
				{
					rel: "alternate icon",
					type: "image/png",
					href: "https://logchimp.codecarrot.net/images/favicon.png"
				},
				{
					rel: "shortcut icon",
					type: "image/icon",
					href: "https://logchimp.codecarrot.net/favicon.ico"
				},
				{
					rel: "icon",
					type: "image/svg+xml",
					href: "https://logchimp.codecarrot.net/images/favicon.svg"
				}
			]
		};
	}
};
</script>

<page-query>
query DocPage ($path: String!) {
	doc: docPage (path: $path) {
		title
		path
		content
	}
}
</page-query>
