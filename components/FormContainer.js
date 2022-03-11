import styled from  'styled-components'

const FormBox = styled.form`
    display: flex;
    flex-direction: column;
    width: 70%;
`

export default function FormContainer(props){
    return(
        <FormBox open={props.open}>{props.children}
        </FormBox>
    )
}
