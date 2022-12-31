import { Link } from 'gatsby';

import { ROUTER_PATH } from '../../constants';
import * as S from './Header.styled';

const Header = () => {
	return (
		<S.HeaderStyled>
			Header
			<br />
			<Link to={ROUTER_PATH.INDEX}>Home</Link> &nbsp;
			<Link to={ROUTER_PATH.ABOUT}>About</Link> &nbsp;
			<Link to={ROUTER_PATH.BLOGS}>Blogs</Link> &nbsp;
			<Link to={'/notfound'}>No Exist</Link> &nbsp;
		</S.HeaderStyled>
	);
};

export default Header;
