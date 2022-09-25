import styled from "styled-components";
export  const _SC_flexColumn = styled.div`
display: flex;
flex-direction: column;
align-items: ${(props) => props.isCentered ? 'center' : 'flex-start'} ;
`
export  const _SC_flexRow = styled.div`
width: 100%;
display: flex;
flex-direction: row;
align-items: ${(props) => props.alignItems } ;
justify-content: ${(props) => props.justifyContent };

`

