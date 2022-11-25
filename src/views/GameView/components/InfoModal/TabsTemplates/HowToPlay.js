import styled from "styled-components";

const Wrapper = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  max-width: 700px;
  margin: 0 auto;
  padding: 20px;
`;
const Title = styled.h1`
  margin: auto;
  width: fit-content;
`;

export default function HowToPlay() {
  return (
    <>
      <Wrapper>
        <Title>How to play</Title>
        <p>The shape Above : Target's Shape</p>
        <p>The shape Above : User's Shape</p>

        <p>
          You need as a player to set your shape exactly as the target shape
        </p>
        <p>To change Property you need to click on the triangle buttons</p>
        <p>
          In order to change the values you need to click on the plus and minus
          buttons
        </p>
        <p>When you match the shapes you will pass to the next level</p>
      </Wrapper>
    </>
  );
}

