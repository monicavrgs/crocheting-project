import styled from 'styled-components'
import { createClient } from '@supabase/supabase-js'
import React from 'react'
import Button  from "../components/Button";
import Container from "../components/Container";
// import FormContainer from './FormContainer';
import Input from "../components/Input";
import Label from "../components/Label";
import Title from "../components/Title";


export default function Form(props){
    const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZkcXhpdmhva3NydGxrd3pncGhuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDY4NTQ4OTEsImV4cCI6MTk2MjQzMDg5MX0.woD90NtZIK3XOaQMDjFcIuDMxLIRone9MGwbOnHLELU'
    const SUPABASE_URL = 'https://fdqxivhoksrtlkwzgphn.supabase.co'
    const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

    const [project, setProject] = React.useState({name: '', rows: '', description: '', recipe_link: ''})
    
    const FormContainer = styled.form`
    display: ${props.open ? "flex" : "none"};
    flex-direction: column;
    width: 70%;
    `

    let open = props.open
    console.log(open)
    function handleNewProject(event){
        setProject({
            ...project,
            [event.target.name]: event.target.value
        })
    }

    function handleNewProjectSubmit(){
        if(project.rows <= 0){
            alert('Invalid number of rows')
        }else{
            supabaseClient
        .from('Projects')
        .insert([
            project
        ])
        .then()
        }
    }
    return(
        <FormContainer open={props.open} onSubmit={(event) =>{
            event.preventDefault()
            handleNewProjectSubmit()}}>

            <Title font='24px'>Create New Project</Title>

            <Container direction='column'>
                <Label htmlFor="name">Name of the project</Label>
                <Input type='text' name='name' onChange={(event) =>{
                    handleNewProject(event)
                }} required/>
            </Container>
            

            <Container direction='column'>
                <Label htmlFor="rows">Number of rows in the project</Label>
                <Input  type='number' name='rows' value={project.rows} onChange={(event) =>{
                    handleNewProject(event)
                }} required/>
            </Container>

            <Container direction='column'>
                <Label htmlFor="description">Description</Label>
                <Input type='text' name='description' value={project.description} onChange={(event) =>{
                    handleNewProject(event)
                }}/>
            </Container>

            <Container direction='column'>
                <Label htmlFor="link">Link for the recipe</Label>
                <Input type='text' name='recipe_link' value={project.recipe_link} onChange={(event) =>{
                    handleNewProject(event)
                }}/>
            </Container>

            <Button type='submit' padding="10px 0">Add new project</Button>
        </FormContainer>
    )
}