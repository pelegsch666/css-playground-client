import styled from "styled-components";
import ExitButton from "./ExitButton";

const StyledHeader = styled.div`
display: flex;
height: 40px;
border: 2px solid red;
`
function Header(){
    return(<StyledHeader>
       <ExitButton/>
    </StyledHeader>)
}



export  default Header