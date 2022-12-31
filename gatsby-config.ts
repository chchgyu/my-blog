import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
	siteMetadata: {
		title: `my-site-name`,
		siteUrl: `https://www.yourdomain.tld`
	},
	graphqlTypegen: true,
	plugins: []
};

export default config;
