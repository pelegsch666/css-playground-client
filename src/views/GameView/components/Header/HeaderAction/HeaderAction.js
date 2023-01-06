import defaultTheme from "theme/defaultTheme";
import styled from "styled-components";
import StyledButton from "../StyledButton";

const StyledHeaderAction = styled(StyledButton)`
      
      height: 100%;
      
      
`

function HeaderAction({children, onClick}){
    return <StyledHeaderAction theme={defaultTheme} onClick={onClick}>{children}</StyledHeaderAction>
}

export default HeaderAction