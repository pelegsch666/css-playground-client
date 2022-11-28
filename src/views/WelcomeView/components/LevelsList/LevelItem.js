import styled from 'styled-components';

const LevelItem = styled.li`
	display: flex;
	justify-content: center;
	align-items: center;
	font-family: Arial, Helvetica, sans-serif;
	font-style: normal;
	color: #16003b;
	cursor: pointer;
	padding: 0;

	background-color: ${(props) => (props.isCurrLvl ? '#F73D93' : 'none')}; 
`;

export default LevelItem;
