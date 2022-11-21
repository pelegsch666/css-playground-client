import styled from 'styled-components';

const StackRow = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	align-items: ${(props) => props.alignItems};
	justify-content: ${(props) => props.justifyContent};
`;

export default StackRow;
