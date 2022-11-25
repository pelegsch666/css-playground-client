import styled from "styled-components"
import { useSetRecoilState } from "recoil";

import { isInfoModalOpenState } from "views/GameView/store";


const Button = styled.button`
background-color: #F73D93;
`


function ExitButton(){
    const setIsInfoModalOpen = useSetRecoilState(isInfoModalOpenState) 
    return(<Button onClick={() => setIsInfoModalOpen(false)}>X</Button>)
}

export default ExitButton