import styled from 'styled-components'
import React from 'react'
import { createClient } from '@supabase/supabase-js'
import  Button  from "../components/Button";
import Container from "../components/Container";
import ProjectItem from "../components/ProjectItem";
import Span from "../components/Span";
import Text from '../components/Text'
import Title from "../components/Title";


const ListContainer = styled.ul`
    display: flex;
    flex-wrap: wrap;
`

export default function ProjectList(){

    const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZkcXhpdmhva3NydGxrd3pncGhuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDY4NTQ4OTEsImV4cCI6MTk2MjQzMDg5MX0.woD90NtZIK3XOaQMDjFcIuDMxLIRone9MGwbOnHLELU'
    const SUPABASE_URL = 'https://fdqxivhoksrtlkwzgphn.supabase.co'
    const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

    const [projectList, setProjectList] = React.useState([])
        
    React.useEffect(() =>{
        supabaseClient.from('Projects')
        .select('*')
        .order('id', {ascending: false})
        .then(({data}) =>{
            setProjectList(data)
        })
    }, [projectList])

    function deleteProject(event){
        let projectID = event.target.value

        supabaseClient.from('Projects')
        .delete()
        .match({id: projectID})
        .then(({data}) =>{
            setProjectList(data)
        })
    }

    return(
        <ListContainer>
                {projectList.map(project =>(
                 <ProjectItem key={project.id}>
                     <Container direction='row' justify='space-between' align='center'>
                        <Title font='20px'>{project.name}</Title>
                        <Container>
                        <Button padding="5px">Edit</Button>
                        <Button padding="5px" value={project.id} onClick={(event)=>{deleteProject(event)}}>Delete</Button>
                        </Container>
                     </Container>


                     <Text><Span>Total rows:</Span> {project.rows}</Text>
                     <Text><Span>Description:</Span> {project.description}</Text>
                     <Text><Span>Recipe:</Span>{project.recipe_link}</Text>
                 </ProjectItem>
                ))}
            </ListContainer>
    )
}