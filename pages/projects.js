import React from "react";
import Form from "../components/Form";
import Main from '../components/Main'
import ProjectList from "../components/ProjectList";
import Title from "../components/Title";

export default function Projects(){

    return(
        <Main width='90%'>
            <Title font='26px'>Projects</Title>
            <ProjectList />
            <Form />
        </Main>
    )
}