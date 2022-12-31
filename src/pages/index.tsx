import { HeadFC, PageProps } from 'gatsby';
import { FC } from 'react';

const IndexPage: FC<PageProps> = () => {
	return <div>IndexPage</div>;
};

export default IndexPage;

export const Head: HeadFC = () => <title>Changyu Blog Index</title>;
