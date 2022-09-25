import { createGlobalStyle } from "styled-components";
import GeminiMoon from "./GeminiMoon.woff"
import PhosphateInline from "./PhosphateInline.woff"
const FontStyles = createGlobalStyle`

@font-face {
    font-family:'Gemini-Moon' ;
    src: url(${GeminiMoon} ) format('woff');
}
@font-face {
    font-family: 'Phosphate' ;
    src: url(${PhosphateInline}) format('woff');
}

`
export default FontStyles
