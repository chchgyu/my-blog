import { HeadFC, PageProps } from 'gatsby';
import { FC } from 'react';

import { AppLayout } from '../layouts';

const BlogsPage: FC<PageProps> = () => {
	return <AppLayout>BlogsPage</AppLayout>;
};

export default BlogsPage;

export const Head: HeadFC = () => <title>BlogsPage</title>;
