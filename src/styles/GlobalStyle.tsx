import { css, Global } from '@emotion/react';

import { reset } from './shared/reset';

const GlobalStyle = () => {
	return (
		<Global
			styles={css`
				${reset}

				html {
					// font-family: '...';
					font-size: 100%;
				}

				html,
				body,
				#root {
					height: 100%;
				}
			`}
		/>
	);
};

export default GlobalStyle;
