import styled from "styled-components";

const HeaderBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${(props) => props.isOpen ? '0px': '12px'};
  padding: 0 10px;
  background-color: #540bd4;
  font-family: Arial, Helvetica, sans-serif;
  cursor: pointer;
`;





const OpenCloseChip = styled.div`

`;

const Title = styled.h1`
  font-size: 2rem;
`;

export default function Header({ isOpen, setIsOpen, title }) {
  return (
    <HeaderBox onClick={() => setIsOpen(!isOpen)} isOpen={isOpen}>
      <Title>{title}</Title>
      <OpenCloseChip>{isOpen ? "Click To Close" : "Click To Open"}</OpenCloseChip>
    </HeaderBox>
  );
}
