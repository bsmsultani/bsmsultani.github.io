import styled from "styled-components"




const ProjectCard = ({image_url, name, description}) => {
    const ProjectCardStyle = {
        border: '1px solid black',


    }
    return (
        <div style={ProjectCardStyle}>
            <h1>{name}</h1>
            <img src={image_url}></img>
            <p1>{description}</p1>
        </div>
    )
}


const ProjectContainer = styled.div`
    background-color: rgb(135, 206, 235);
    margin: 10px auto;
    display: flex;

`;


const Projects = () => {
    return(
        <ProjectContainer>
        </ProjectContainer>
    )
}

export default Projects;