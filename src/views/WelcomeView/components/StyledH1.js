import styled from 'styled-components';

import defaultTheme from 'theme/defaultTheme';

const StyledH1 = styled.h1`
	font-family: 'Gemini-Moon';
	font-style: normal;
	font-weight: 400;
	font-size: 96px;
	line-height: 100px;
	text-align: center;
	color: #e6e6e6;
	text-shadow: -11px 5px 4px #361bd9, 11px 5px 3px #e10c0c;
	${defaultTheme.breakpoints.down('sm')} {
		font-size: ${defaultTheme.typography.fontSize[9]};
	}
`;
export default StyledH1;
