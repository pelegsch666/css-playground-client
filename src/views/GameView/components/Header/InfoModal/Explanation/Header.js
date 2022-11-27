import styled from "styled-components";

const HeaderBox = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #540bd4;
  font-family: Arial, Helvetica, sans-serif;
  cursor: pointer;
`;

const IconBox = styled.div``;

const Title = styled.h1`
  font-size: 40px;
`;

export default function Header({ isOpen, setIsOpen, title }) {
  return (
    <HeaderBox onClick={() => setIsOpen(!isOpen)}>
      <Title>{title}</Title>
      <IconBox>{isOpen ? "Close" : "Open"}</IconBox>
    </HeaderBox>
  );
}
