import { FC, ReactNode } from 'react';

import Header from '../../components/Header';
import { GlobalStyle } from '../../styles';
import * as S from './AppLayout.styled';

interface AppLayoutProps {
	children?: ReactNode;
}

const AppLayout: FC<AppLayoutProps> = ({ children }) => {
	return (
		<>
			<GlobalStyle />
			<S.Container>
				<Header />
				<S.Wrapper>{children}</S.Wrapper>
			</S.Container>
		</>
	);
};

export default AppLayout;
