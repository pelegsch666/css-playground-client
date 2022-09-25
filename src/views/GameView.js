import { useParams } from "react-router-dom"
import { levelArray } from "../constants/levelsArray"
import styled from "styled-components"
import { _SC_flexColumn, _SC_flexRow } from "../components/_SC/layoutUtil"
import degObj from "../helpers/degObj"
import { useEffect, useState, useReducer, useContext } from "react"
import INIT_STATE from "../constants/INIT_STATE"
import ACTIONS from "../constants/ACTIONS"
import StateContext from "../contexts/StateContext"
const ShapeContainer = styled.div`
width: 334px;
height: 254px;
left: 40px;
top: 40px;

filter: drop-shadow(0px 8px 24px rgba(230, 230, 230, 0.15));
background: #540BD4;
border: 6px solid #16003B;
border-radius: 40px;
`
const PropertyContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 212px;
height: 148px;
left: 5px;
top: -49px;

background: #F73D93;
border: 6px solid #16003B;
box-shadow: 0px 8px 24px rgba(230, 230, 230, 0.15);
border-radius: 14px;

`
const TriangleButton = styled.div`
width: 0; 
  height: 0; 
  border-left: 40px solid transparent;
  border-right: 40px solid transparent;
  border-top: 40px solid #F73D93;
  transform: rotate(${(props) => props.deg}deg);
`
const CircleButton = styled.div`
position: relative;
display: flex;
justify-content: center;
align-items: center;
width: 72px;
height: 72px;
left: 0px;
top: 0px;

background: #F73D93;
border: 6px solid #16003B;
box-shadow: 0px 8px 24px rgba(230, 230, 230, 0.15);
border-radius: 50%;
`
const Line = styled.div`
position: absolute;
width: 10px;
height: 47px;

transform: translateY(50%) ;
transform: translateX(50%);
background: #16003B;
transform: rotate(${(props) => props.degree}deg);

`
const PropertyName = styled.h2`
color: black;
font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
`
const PropertyValue = styled.h4`
color: black;
font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
font-size: 25px;
`



function GameView() {
    const { id } = useParams()
    const [propertiesArray, setPropertiesArray] = useState([])
    const [propertyIndex, setPropertyIndex] = useState(1)
    const {dispatch} = useContext(StateContext)  

    function changePropertyIndex(amount) {
        if (amount === 1) {
            if (propertyIndex + amount < propertiesArray.length - 1) {
                setPropertyIndex(propertyIndex + amount)
            } else {
                setPropertyIndex(0)
            }
        } else {
            if (propertyIndex > 0) {
                setPropertyIndex(propertyIndex + amount)
            } else {
                setPropertyIndex(propertiesArray.length - 1)
            }
        }


    }




    useEffect(() => {


        const currUserShape = levelArray[id].userShape;
        const currUserProps = Object.keys(currUserShape);
        console.log(currUserProps)
        setPropertiesArray(currUserProps)
    }, [id])
    return (
        <>
            <_SC_flexColumn isCentered={true}>
                <h1>{levelArray[+id]?.title}</h1>
                <ShapeContainer />
                <br />
                <ShapeContainer />
                <br />
                <_SC_flexRow justifyContent='center' alignItems='center'>
                    <TriangleButton deg={degObj.LEFT} onClick={() => dispatch({type:ACTIONS.CHANGE_LEVEL_INDEX,payload:{amount:-1}})} />
                    <PropertyContainer><PropertyName>{propertiesArray[propertyIndex]}</PropertyName>
                        <PropertyValue>{levelArray[id].userShape[propertiesArray[propertyIndex]]}</PropertyValue>
                    </PropertyContainer>
                    <TriangleButton deg={degObj.RIGHT} onClick={() => dispatch({type:ACTIONS.CHANGE_LEVEL_INDEX,payload:{amount:1}})} />

                </_SC_flexRow>
                <_SC_flexRow justifyContent='space-between' alignItems='center'>
                    <CircleButton onClick={() => dispatch({type:ACTIONS.DEC})}><Line degree={90} /></CircleButton>
                    <CircleButton  onClick={() => dispatch({type:ACTIONS.INC})}><Line degree={90} /><Line degree={180} /></CircleButton>
                </_SC_flexRow>
            </_SC_flexColumn>
        </>
    )


}
export default GameView