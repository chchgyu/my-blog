import { HeadFC, PageProps } from 'gatsby';
import { FC } from 'react';

import { AppLayout } from '../layouts';

const AboutPage: FC<PageProps> = () => {
	return <AppLayout>AboutPage</AppLayout>;
};

export default AboutPage;

export const Head: HeadFC = () => <title>AboutPage</title>;
