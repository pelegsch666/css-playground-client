import styled from 'styled-components';
import defaultTheme from 'theme/defaultTheme';

const StyledPropertyContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
	width: 212px;
	height: 148px;
	left: 5px;
	top: -49px;
	background: #f73d93;
	border: 6px solid #16003b;
	box-shadow: 0px 8px 24px rgba(230, 230, 230, 0.15);
	border-radius: 14px;
    ${(props) => props.theme.breakpoints.down('sm')}{
		height: 100px;
	    
	}	
`;
function PropertyContainer({children}){
  return <StyledPropertyContainer theme={defaultTheme}>{children}</StyledPropertyContainer>


}



export default PropertyContainer;
