import styled from "styled-components";

const StyledUl = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

function Ul({ children }) {
  return <StyledUl>{children}</StyledUl>;
}

export default Ul;
