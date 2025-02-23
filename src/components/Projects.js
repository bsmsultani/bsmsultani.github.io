import styled from "styled-components"


const ProjectCardWrapper = styled.div`
    width: 30%;
    border-radius: 40px;
    padding: 10px;
    border: 1px solid black;
    background-color: white;
    text-align: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    &:hover {
        background-color: #ddd;
        transform: scale(1.1);
    }

    @media (max-width: 768px) {
        width: 100%;
    }

`;

const ProjectImage = styled.img`
    width: 90%;
    border-radius: inherit;
    cursor: pointer;
`;




const ProjectCard = ({ id, image_url, name, description, urls }) => {

    const handleProjectClick = (data) => {
        console.log("clicked")
        console.log(data)
    }


    return (
        <ProjectCardWrapper onClick={() => handleProjectClick({id})}>
            <h3 style={{"margin" : "5px", "textAlign" : "center"}}>{name}</h3>
            <ProjectImage src={image_url} alt={name} onClick={() => handleProjectClick({id})} />
            <p>{description}</p>
        </ProjectCardWrapper>
    );
};





const ProjectContainerBackground = styled.div`
    background-color: rgba(135, 206, 235, 0.3);
    padding: 0% 20% 5% 20%;
    margin: 50px 0 auto;
`


const ProjectContainer = styled.div`
    display: flex;
    justify-content: space-between;
    @media (max-width: 768px) {
        flex-direction: column;

    }
    
    flex-wrap: wrap;
    & > div {
        flex: 1 1 30%;  /* Allow each project to take 30% of the container width */
        margin: 10px; /* Add space between projects */
    }



`;

const SearchProjectsField = styled.input`
    width: 40%;
    border: none;
    font-size: 16px;
    height: 35px;
    padding: 6px;
    &:focus {
        outline: none;
    }

    @media(max-width: 768px) {
        width: auto;
    }

`;


const SearchButton = styled.input`
    font-size: 16px;
    height: 35px;
    border: none;
    padding: 6px;
    width: auto;
    transition: transform 0.1s ease, box-shadow 0.1s ease;

    &:hover {
        cursor: pointer;
    }

    &:active {
        opacity: 0.7;
        transform: scale(1.1);
    }

    }
`;




const SearchWrapper = styled.div`
    text-align: right;
    padding: 3% 1%;

    @media(max-width: 768px) {
        text-align: center;
    }

`;



const Projects = () => {


    const listofProject = [
        {
            "id" : 1,
            "image_url" : "https://media.licdn.com/dms/image/v2/D4D22AQHLA7ig-azMLw/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1721830060509?e=1743033600&v=beta&t=MIvgGdnAIXw6QWn_XwF4bu5m5W6PLvVz9XTRURosn2A",
            "name" : "Generate Flashcards with AI",
            "description" : "In this project we made a fullstack AI flashcard application."
        },
        {

        },
        {
            
        },
        {

        },
        {

        }


    ]



    return(
        <ProjectContainerBackground>
            <SearchWrapper>
                <SearchProjectsField type="text" placeholder="search projects"></SearchProjectsField>
                <SearchButton type="button" value="Search"></SearchButton>
            </SearchWrapper>
            <ProjectContainer>
                {listofProject.map((project) => (
                    <ProjectCard id={project.id} image_url={project.image_url} name={project.name} description={project.description}
                    ></ProjectCard>
                ))} 
            </ProjectContainer>
        </ProjectContainerBackground>
    )
}

export default Projects;