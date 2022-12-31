import type { GatsbyNode } from 'gatsby';

const node: GatsbyNode = {
	onCreateBabelConfig: ({ actions }) => {
		actions.setBabelPlugin({
			name: '@babel/plugin-transform-react-jsx',
			options: {
				runtime: 'automatic'
			}
		});
	}
};

export default node;
