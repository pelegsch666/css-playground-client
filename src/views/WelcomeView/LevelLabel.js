import styled from "styled-components"
const LevelLabel = styled.li`

font-family: 'Phosphate';
font-style: normal;
font-weight: 400;
font-size: 36px;
line-height: 45px;
/* identical to box height */
color: #16003B;
cursor: pointer;
background-color: ${(props) => props.isCurrLvl ? '#F73D93' : 'none'};
`
export default LevelLabel