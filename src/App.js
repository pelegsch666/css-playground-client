import WelcomeView from "./views/WelcomeView";
import { createGlobalStyle } from "styled-components";
import { objMockData } from "./mockData";
import { useEffect, useReducer } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import GameView from "./views/GameView";
import {RecoilRoot, useSetRecoilState} from "recoil";
import StateContext from "./contexts/StateContext";
import reducer from "./helpers/reducer";
import INIT_STATE from "./constants/INIT_STATE";
import { levelsDataState } from "./recoil/globalStates";

//const socket = io('http://localhost:5050');

const GlobalStyle = createGlobalStyle`
html{ height: 100vh}
body{
 background: linear-gradient(172.94deg, #16003B 20.22%, #003B11 94.49%);
 color: white;}
`

function App() {
  const [state, dispatch] = useReducer(reducer,INIT_STATE )
  const setLevelsData =  useSetRecoilState(levelsDataState); 
  
  useEffect(() =>{
    setLevelsData(objMockData)
  },[])
  
  
  
  return (
    <>
     
     <BrowserRouter>
     
     <StateContext.Provider value={{state,dispatch}}>
        
        
          <GlobalStyle />

          <Routes>

            <Route path="/" element={<WelcomeView />} />
            <Route path="GameView/:id" element={<GameView />} />


          </Routes>


        </StateContext.Provider>
      
      </BrowserRouter>


    </>
  );
}

export default App;
