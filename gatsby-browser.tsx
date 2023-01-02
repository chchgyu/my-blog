import type { GatsbyBrowser } from 'gatsby';

import { GlobalStyle } from './src/styles';

export const wrapPageElement: GatsbyBrowser['wrapPageElement'] = ({ element }) => {
	return (
		<>
			<GlobalStyle />
			{element}
		</>
	);
};
