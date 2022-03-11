import styled from 'styled-components'

export default styled.h1`
    font-size: ${props => props.font};
    margin-top: 10px;
`

// export default function Title(props){
//     return(
//         <PageTitle>{props.children}</PageTitle>
//     )
// }