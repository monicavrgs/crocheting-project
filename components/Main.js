import styled from 'styled-components'


export default styled.main`
  display: flex;
  flex-direction: column;
  margin: 20px auto;

  @media(max-width: 980px){
    max-width: 85%;
  }

  @media(min-width: 981px){
    max-width: 50%;
  }
`