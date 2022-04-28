import styled from 'styled-components'
import React from 'react'

export default styled.button`
    margin: 10px 5px;
    padding: ${props => props.padding};
    background-color: #E6D1B2;
    border: 1px solid #E6D1B2;
    border-radius: 5px;
    color: #FFF;
    font-size: 15px;
    font-weight: bold;

    :hover{
        cursor: pointer;
        background-color: #FFF;
        border: 1px solid #E6D1B2;
        color: #F2C4AE;
    }

    @media(min-width: 972px){
        width: 40%;
    }
`

// function Button(props){

//     return(
//         <Btn width={props.width} padding={props.padding}>{props.children}</Btn>
//     )
// }

