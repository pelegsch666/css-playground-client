import styled from "styled-components";

import { useRecoilState, useSetRecoilState } from "recoil";
import { isHeaderOpenState, isInfoModalOpenState } from "views/GameView/store";

import StyledButton from "views/GameView/components/Header/StyledButton";
import defaultTheme from "theme/defaultTheme";

const Button = styled(StyledButton)`
border-radius: 0;
width: 80px;
min-width: 0;
${(props)=> props.theme.breakpoints.down('sm')}{
  display : inline-block ;
  padding: 2px;
  height : 40px ;
  width: 70px;
  font-size: 0.7rem;
}

`

export default function HeaderToggle() {
  const [isHeaderOpen, setIsHeaderOpen] = useRecoilState(isHeaderOpenState);
  const setInfoModalOpen = useSetRecoilState(isInfoModalOpenState);

  function toggleHeader() {
    if (isHeaderOpen) {
      setIsHeaderOpen(false);
      setInfoModalOpen(false);
    } else {
      setIsHeaderOpen(true);
    }
  }

  return (
    <Button onClick={toggleHeader} theme={defaultTheme}>
      {isHeaderOpen ? "Close Options" : "Open Options"}
    </Button>
  );
}
