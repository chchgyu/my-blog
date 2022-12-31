import { HeadFC, Link, PageProps } from 'gatsby';
import { FC } from 'react';

import { AppLayout } from '../layouts';

const NotFoundPage: FC<PageProps> = () => {
	return (
		<AppLayout>
			404 - NotFoundPage <br />
			<Link to="/">Go home</Link>.
		</AppLayout>
	);
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>Not found</title>;
