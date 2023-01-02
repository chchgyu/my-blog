import { FC, ReactNode } from 'react';

import Header from '../../components/Header';
import * as S from './AppLayout.styled';

interface AppLayoutProps {
	children?: ReactNode;
}

const AppLayout: FC<AppLayoutProps> = ({ children }) => {
	return (
		<S.Container>
			<Header />
			<S.Wrapper>{children}</S.Wrapper>
		</S.Container>
	);
};

export default AppLayout;
