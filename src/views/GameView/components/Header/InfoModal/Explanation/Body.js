import styled from "styled-components";

import { getPropertyExplanation } from "helpers";

const BodyExplanationContainer = styled.div`
  background-color: #17013c;
  color: #fff;
  font-family: Arial, Helvetica, sans-serif;
  padding: 12px;
`;
const SubTitle = styled.h2``;
const DescriptionContent = styled.p``;
const Link = styled.a`
color: inherit;
`;

export default function Body({ isOpen, propertyName }) {
  const { description, links } = getPropertyExplanation(propertyName);

  return isOpen ? (
    <BodyExplanationContainer>
      <SubTitle>Description</SubTitle>
      <DescriptionContent>{description}</DescriptionContent>
      <SubTitle>Links</SubTitle>
      {links.map((link) => (
        <Link href={link} target="_blank">
          {link}
        </Link>
      ))}
    </BodyExplanationContainer>
  ) : null
}
