import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { _SC_flexColumn } from "../components/_SC/layoutUtil";
import FontStyles from "../font/FontStyles";
import degObj from "../helpers/degObj"
import { levelArray } from "../constants/levelsArray";
import { useNavigate } from "react-router-dom";
const StyledH1 = styled.h1`



font-family: 'Gemini-Moon';

font-style: normal;
font-weight: 400;
font-size: 96px;
line-height: 100px;

text-align: center;

color: #E6E6E6;

text-shadow: -11px 5px 4px #361BD9, 11px 5px 3px #E10C0C;

`
const StyledLabel = styled.label`
font-family: 'Phosphate';
font-style: normal;
font-weight: 400;
font-size: 36px;
line-height: 45px;
color: #E6E6E6;
`
const StyledInput = styled.input`
background-color: #eee;
height: 40px;
border-radius: 5px;
border: 1px solid #ddd;
margin: 10px 0 20px 0;
padding: 20px;
box-sizing: border-box;

`
const TriangleButton = styled.div`
width: 0; 
  height: 0; 
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  border-top: 20px solid #F73D93;
  transform: rotate(${(props) => props.deg}deg);
`
const LevelsDiv = styled.div`
display:flex;
flex-direction: column;
align-items: center;
width: 334px;
background: #540BD4;
border: 6px solid #16003B;
border-radius: 40px;
`
const PlayButton = styled.button`
width: 334px;
height: 157px;


background: #17EB40;
border: 6px solid #16003B;
box-shadow: 0px 8px 24px rgba(230, 230, 230, 0.15);
border-radius: 40px;
font-family: Phosphate;
font-size: 96px;
`
const LevelLabel = styled.li`

font-family: 'Phosphate';
font-style: normal;
font-weight: 400;
font-size: 36px;
line-height: 45px;
/* identical to box height */
color: #16003B;
cursor: pointer;
background-color: ${(props) => props.isCurrLvl ? '#F73D93' : 'none'};
`

const SwitchButton = styled.button`

width: 120px;
height: 44px;
left: 60px;
top: 247px;

background: #D9D9D9;
border-radius: 50%;
font-family: 'Phosphate';
`
const StyledUl = styled.ul`
font-family: 'Phosphate';


`



export default function WelcomeView() {

    const [currLevelIndex, setCurrLevelIndex] = useState(0)
    const [playerName, setPlayerName] = useState('')
    const [roomId, setRoomId] = useState('')
    const navigate = useNavigate()
    const [isCreateOn, setIsCreateOn] = useState(true)
    function handleRoomID(roomId) {
        setRoomId(roomId)
        console.log(roomId)

    }
    function handleIndexChanges(dir) {
        /*dir can be 1 or 0  according to boolean laws*/
        if (dir) {
            if (currLevelIndex < levelArray.length - 1) {
                setCurrLevelIndex(currLevelIndex + 1)
            }

        } else {
            if (currLevelIndex > 0) {
                setCurrLevelIndex(currLevelIndex - 1)

            }
        }

    }
    useEffect(() => {
        console.log(playerName)
    }, [playerName])


    function handleName(name) {

        setPlayerName(name)

    }

    function handleClickLevel(index) {
        setCurrLevelIndex(index)
        console.log(index)
    }
    function handlePlayClick() {
        console.log('Hail')
        navigate(`/GameView/${currLevelIndex}`)
    }

    return (
        <>
            <_SC_flexColumn isCentered={true}>
                <StyledH1>CSS Playground</StyledH1>

                <StyledLabel>NAME:<StyledInput value={playerName} onChange={(e) => handleName(e.target.value)} /></StyledLabel>

                {isCreateOn ? (
                    <>
                        <LevelsDiv>  <TriangleButton deg={degObj.UP} onClick={() => handleIndexChanges(0)} />
                            <ul style={{ listStyle: 'none' }}>
                                {levelArray.map((el, index) => {
                                    return <LevelLabel key={index} onClick={() => handleClickLevel(index)} isCurrLvl={+index === currLevelIndex}>{el.title.toUpperCase()}</LevelLabel>
                                })}
                            </ul>
                            <TriangleButton deg={degObj.DOWN} onClick={() => handleIndexChanges(1)} />
                        </LevelsDiv>
                    </>
                ) : (<>
                    <br />
                    <StyledLabel>Room ID:<StyledInput onChange={(e) => handleRoomID(e.target.value)} /></StyledLabel>
                </>)}





                <PlayButton onClick={handlePlayClick}>PLAY </PlayButton>

            </_SC_flexColumn>


        </>

    )



}