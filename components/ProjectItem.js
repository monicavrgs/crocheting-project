import styled from 'styled-components'

const ListItem = styled.li`
    border: 1px solid #E6D1B2;
    border-radius: 5px;
    width: 30%;
    margin: 15px 15px 15px 0;
    padding: 8px;
    word-wrap: break-word;
    box-sizing: border-box;

    @media(max-width: 972px){
        width: 90%;
    }
`

export default function ProjectItem(props){
    return(
        <ListItem >
            <article>
            {props.children}
            </article>
        </ListItem>
    )
}