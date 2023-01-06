import styled from "styled-components"
import defaultTheme from "theme/defaultTheme"

const StyledButton = styled.button`
  border-radius: ${defaultTheme.border.radius.pill};
  background-color: ${defaultTheme.colors.pink};
  border: none;
  color: ${defaultTheme.colors.white};
  min-width: 80px;
  cursor: pointer;
  &:hover{
    background-color: ${defaultTheme.colors.purple} ;
  }
`



export default StyledButton