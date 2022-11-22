import styled from "styled-components";

const ModalBox = styled.div`
display: flex;
position: fixed;
background-color: black;
top:0;
left:0;
right: 0;
bottom: 0;
flex-direction: column;
border: 2px solid red;
opacity: 0.9;
z-index: 10;
`

export default ModalBox;