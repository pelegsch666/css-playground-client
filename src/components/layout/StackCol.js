import styled from 'styled-components';

export const StackCol = styled.div`
	display: flex;
	flex-direction: column;
	align-items: ${(props) => (props.isCentered ? 'center' : 'flex-start')};
`;

export default StackCol;
