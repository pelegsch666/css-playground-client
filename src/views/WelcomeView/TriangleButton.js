import styled from "styled-components"

const TriangleButton = styled.div`
width: 0; 
  height: 0; 
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  border-top: 20px solid #F73D93;
  transform: rotate(${(props) => props.deg}deg);
`
export default TriangleButton