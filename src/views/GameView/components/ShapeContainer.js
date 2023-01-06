
import styled from 'styled-components';
import defaultTheme from 'theme/defaultTheme';

const StyledShapeContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 334px;
	height: 254px;
	left: 40px;
	top: 40px;
	filter: drop-shadow(0px 8px 24px rgba(230, 230, 230, 0.15));
	background: #540bd4;
	border: 6px solid #16003b;
	border-radius: 40px;
    margin-bottom: 5px;
	${(props) => props.theme.breakpoints.down('sm') }{
	
	height: 200px;
	width: 100%;

	}
	`;

function ShapeContainer({children}){
 return <StyledShapeContainer theme={defaultTheme}>{children}</StyledShapeContainer>
}


export default ShapeContainer;
