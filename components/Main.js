import styled from 'styled-components'

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  margin: 20px auto;

  @media(max-width: 980px){
    max-width: 85%;
  }

  @media(min-width: 981px){
    max-width: ${props => props.width}
  }
`


export default function Main(props){
  return(
    <MainContainer width={props.width}>{props.children}</MainContainer>
  )
}
