import styled from "styled-components"


const ProjectCardWrapper = styled.div`
    width: 30%;
    border-radius: 3px;
    background-color: white;
    text-align: center;
    transition: all 0.3s ease;
    &:hover {
        background-color: #ddd;
        transform: scale(1.1);
    }

`;

const ProjectImage = styled.img`
    width: 90%;
    border-radius: inherit;
`;

const ViewFullProjectButton = styled.button`
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    cursor: pointer;
    width: 100%;
    
    &:hover {
        background-color: #0056b3;
    }
`;




const ProjectCard = ({ id, image_url, name, description, urls }) => {
    return (
        <ProjectCardWrapper>
            <h2 style={{"margin" : "5px", "textAlign" : "center"}}>{name}</h2>
            <ProjectImage src={image_url} alt={name} />
            <p>{description}</p>
            <ViewFullProjectButton className="viewFullProjectButton">
                View Full Project
            </ViewFullProjectButton>
        </ProjectCardWrapper>
    );
};


const ProjectContainerBackground = styled.div`
    background-color: rgb(135, 206, 235);
    padding: 5% 20%;
    margin: 50px 0 auto;
`


const ProjectContainer = styled.div`
    display: flex;
    justify-content: space-between;
    @media (max-width: 768px) {
        flex-direction: column;
    }

`;



const Projects = () => {

    const listofProject = [
        {
            "name" : "Generate Flashcards with AI (2024 CodeNetwork Hackathon)"


        }
    ]
    return(
        <ProjectContainerBackground>
            <ProjectContainer>
                <ProjectCard id={1} image_url="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg" name="A picture of an elephant" description="Image Picker Wheel is a special random image generator to pick a random picture from a list of pictures provided by using a wheel. Interactive and fun."
                urls={["https://google.com", "https://instagram.com"]}></ProjectCard>
                                <ProjectCard id={1} image_url="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg" name="A picture of an elephant" description="Image Picker Wheel is a special random image generator to pick a random picture from a list of pictures provided by using a wheel. Interactive and fun."
                urls={["https://google.com", "https://instagram.com"]}></ProjectCard>
                                <ProjectCard id={1} image_url="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg" name="A picture of an elephant" description="Image Picker Wheel is a special random image generator to pick a random picture from a list of pictures provided by using a wheel. Interactive and fun."
                urls={["https://google.com", "https://instagram.com"]}></ProjectCard>
            </ProjectContainer>
        </ProjectContainerBackground>
    )
}

export default Projects;