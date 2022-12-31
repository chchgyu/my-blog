import { HeadFC, Link, PageProps } from 'gatsby';
import { FC } from 'react';

const NotFoundPage: FC<PageProps> = () => {
	return (
		<div>
			404 - NotFoundPage <br />
			<Link to="/">Go home</Link>.
		</div>
	);
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>Not found</title>;
