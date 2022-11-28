import styled from "styled-components";

import defaultTheme from "theme/defaultTheme";

const LevelsDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 334px;
  background: ${defaultTheme.colors.purple};
  border-width: ${defaultTheme.border.width[3]};
  border-style: solid;
  border-color: ${defaultTheme.colors.deepBlue};
  border-radius: ${defaultTheme.border.radius[10]};

  ${defaultTheme.breakpoints.down("sm")} {
	width: 100%;
  }
  ${defaultTheme.breakpoints.up("sm")} {
	width: 334px;
  }

  
`;
export default LevelsDiv;
