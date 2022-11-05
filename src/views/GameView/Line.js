import styled from "styled-components"

const Line = styled.div`
position: absolute;
width: 10px;
height: 47px;
transform: translateY(50%) ;
transform: translateX(50%);
background: #16003B;
transform: rotate(${(props) => props.degree}deg);
`

export default Line