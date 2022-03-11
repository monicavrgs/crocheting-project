import React from "react";
import Form from "../components/Form";
import Header from "../components/Header";
import Main from '../components/Main'
import ProjectList from "../components/ProjectList";
import Title from "../components/Title";
import Button from "../components/Button";

export default function Projects(){
    const [open, setOpen] = React.useState(false)

    return(
        <>
        <Header />
        <Main width='90%'>
            <Title font='26px'>Projects</Title>
            <ProjectList />
            <Button padding="10px 0" width="10%" value={open} onClick={(event) => {
                setOpen(!open)
                }}>New Project</Button>
            <Form open={open}/>
        </Main>
        </>
    )
}