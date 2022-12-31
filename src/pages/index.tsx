import { HeadFC, PageProps } from 'gatsby';
import { FC } from 'react';

import { AppLayout } from '../layouts';

const IndexPage: FC<PageProps> = () => {
	return <AppLayout>IndexPage</AppLayout>;
};

export default IndexPage;

export const Head: HeadFC = () => <title>IndexPage</title>;
