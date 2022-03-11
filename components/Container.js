import styled from 'styled-components'

export default styled.div`
    margin-bottom: 10px;
    display: flex;
    flex-direction: ${props => props.direction};
    justify-content: ${props => props.justify};
    align-item: ${props => props.align};
`