import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { _SC_flexColumn } from "../../components/_SC/layoutUtil";
import FontStyles from "../../font/FontStyles";
import degObj from "../../helpers/degObj"
import { levelArray } from "../../constants/levelsArray";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { levelsDataState, currIndexLevelState } from "../../recoil/globalStates";
import { getLevelsTitlesFromData } from "../../helpers/getLevelsTitlesFromData";
import LevelLabel from "./LevelLabel";
import LevelsDiv from "./LevelsDiv";
import PlayButton from "./PlayButton";
import StyledH1 from "./StyledH1";
import StyledInput from "./StyledInput"
import StyledLabel from "./StyledLabel";
import StyledUl from "./StyledUl";
import SwitchButton from "./SwitchButton";
import TriangleButton from "./TriangleButton";



export default function WelcomeView() {

    const [currLevelIndex, setCurrLevelIndex] = useRecoilState(currIndexLevelState);
    const levelsData = useRecoilValue(levelsDataState)
    const [titles,setTitles] = useState([])
    console.log('titles', titles)
    const [playerName, setPlayerName] = useState('')
    const [roomId, setRoomId] = useState('')
    const navigate = useNavigate()
    const [isCreateOn, setIsCreateOn] = useState(true)
    
    useEffect(() => {
        setTitles(getLevelsTitlesFromData(levelsData))
    },[levelsData])
    
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

              

                {isCreateOn ? (
                    <>
                        <LevelsDiv>  <TriangleButton deg={degObj.UP} onClick={() => handleIndexChanges(0)} />
                            <ul style={{ listStyle: 'none' }}>
                                {titles?.map((el, index) => {
                                    return <LevelLabel key={index} onClick={() => handleClickLevel(index)} isCurrLvl={+index === currLevelIndex}>{el.toUpperCase()}</LevelLabel>
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