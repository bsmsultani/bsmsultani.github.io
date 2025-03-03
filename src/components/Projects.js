import styled from "styled-components"
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import Markdown from "react-markdown";
import { useEffect } from "react";
import { listOfBlog, listOfProject } from './utils.js';
import { CCarousel, CCarouselCaption, CCarouselItem, CImage } from '@coreui/react'
import { Link, useParams } from "react-router-dom";




export const CarouselWithCaptionsExample = () => {
    return (
      <CCarousel controls indicators>
        <CCarouselItem>
          <CImage className="d-block w-100" src="https://picsum.photos/800/400?random=1" alt="slide 1" />
          <CCarouselCaption className="d-none d-md-block">
            <h5>First slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
          </CCarouselCaption>
        </CCarouselItem>
        <CCarouselItem>
          <CImage className="d-block w-100" src="https://picsum.photos/800/400?random=2" alt="slide 2" />
          <CCarouselCaption className="d-none d-md-block">
            <h5>Second slide label</h5>
            <p>Some representative placeholder content for the second slide.</p>
          </CCarouselCaption>
        </CCarouselItem>
        <CCarouselItem>
          <CImage className="d-block w-100" src="https://picsum.photos/800/400?random=3" alt="slide 3" />
          <CCarouselCaption className="d-none d-md-block">
            <h5>Third slide label</h5>
            <p>Some representative placeholder content for the third slide.</p>
          </CCarouselCaption>
        </CCarouselItem>
      </CCarousel>
    )
}

  

const ProjectCardWrapper = styled.div`
    max-width: 30%;
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
        max-width: 80%;
        border-radius: 0px;
        padding: 10px;
        &:hover {
            transform: scale(1.009);
        }
    }

`;

const ProjectImage = styled.img`
    width: 90%;
    border-radius: inherit;
    cursor: pointer;
`;


const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 999;

`;

const Popup = styled.div`
    position: fixed;
    margin-top: 10px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: white;
    border: 1px solid #ccc;
    z-index: 1000;
    width: 60%;
    border: 1px solid black;
    border-radius: 40px;
    padding: 40px;
    height: 100%;
    overflow-y: auto;

    & > .markdown * img {
        width: 90%;
    }
    @media (max-width: 768px) {
        width: 100%;
        border-radius: 0;

    }
`;


const MarkDownWrapper = styled.div`
    & * img {
        width: 90%;
        
    }
`;



const MyCarousel = () => {
    return (
        <Carousel>
            <Carousel.Item>

            </Carousel.Item>
        </Carousel>
    );}  

const ProjectCard = ({ id, image_url, name, description, markdown, tags, haveCarousel, htmlFile}) => {


    const [htmlContent, setHtmlContent] = useState(null);

    useEffect(() => {
      // Fetch HTML content using Promise.then() chaining
      fetch(htmlFile)
        .then(response => response.text())  // Convert the response to text (HTML)
        .then(htmlResponse => {
            if (htmlFile) {
            setHtmlContent(htmlResponse);  // Update state with the resolved HTML content
            }

        });
    }, [htmlFile]);  // Empty dependency array, so the effect runs once when the component mounts
  

    // show project article if 
    const [showProjectArticle, setShowProjectArticle] = useState(false);

    const handleProjectClick = (data) => {

        // sends out a request and recieves a response

        console.log("clicked")
        console.log(data)
        // test


 
        setShowProjectArticle(true);
    }


    return (
        <>
            
            <ProjectCardWrapper onClick={() => handleProjectClick({id})}>
                <h3 style={{"margin" : "5px", "textAlign" : "center"}}>{name}</h3>
                <ProjectImage src={image_url} alt={name} />
                <p>{description}</p>
                <div style={{"display" : "flex", "flexWrap" : "wrap", "alignItems" : "center", "justifyContent": "center"}}>

                    {tags.map((tag, index) => (
                        <span key={index} style={{"backgroundColor" : "#DBE2FF", "margin" : "1px", "padding" : "5px", "flexShrink" : 0, "borderRadius" : "5px"}}>{tag}</span> 
                    ))}
                </div>
            </ProjectCardWrapper>
            

            {showProjectArticle && (
                <div style={{"all" : "unset"}}>
                    <Overlay></Overlay>
                    <Popup >
                        <div>
                            <RxCross2 style={{"cursor" : "pointer"}} size={32} onClick={()=> setShowProjectArticle(false)}></RxCross2>
                        </div>
                        {haveCarousel ? (
                            <CarouselWithCaptionsExample></CarouselWithCaptionsExample>
                        ) : 
                        (
                            <></>
                        )}

                        <MarkDownWrapper>
                            <Markdown>{markdown}</Markdown>
                            {htmlContent ? (
                                <div dangerouslySetInnerHTML={{__html: htmlContent}}></div>
                            ) : (
                                <></>
                            )}
                            
                        </MarkDownWrapper>
                    </Popup>

                    
                </div>
            )}
        </>

    );
};





const ProjectContainerBackground = styled.div`
    background-color: rgba(135, 206, 235, 0.3);
    padding: 0% 20% 5% 20%;
    margin: 50px 0 auto;

    @media (max-width: 768px) {
        padding: 0px;
    }
`

    



const ProjectContainer = styled.div`
    display: flex;
    justify-content: space-between;
    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        
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
    color: black;
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
        padding: 3% 0%;
    }

`;


const FilterWrapper = styled.div`
    display: inline-block;

`;






const Projects = (props) => {
    const blogTagFrequency = {};
    const projectTagFrequency = {};

    listOfBlog.forEach((blog) => {
        blog.tags.forEach((tag) => {
            if (blogTagFrequency[tag]) {
                blogTagFrequency[tag]++;
            }
            else { blogTagFrequency[tag] = 1; }
        })
    })


    listOfProject.forEach((project) => {
        project.tags.forEach((tag) => {
            if (projectTagFrequency[tag]) {
                projectTagFrequency[tag]++;
            }
            else { projectTagFrequency[tag] = 1; }
        })
    })









    return(
        <ProjectContainerBackground>
            
            <SearchWrapper>
                <SearchProjectsField type="text" placeholder="search projects"></SearchProjectsField>
                <SearchButton type="button" value="Search"></SearchButton>
            </SearchWrapper>
            <FilterWrapper>
                {props.isBlogs ? (
                    Object.entries(blogTagFrequency)
                    .sort(([, countA], [, countB]) => countB - countA)
                    .map(([tag, count]) => (
                        <FilterWrapper>
                            <div style={{border : "1px solid black", margin: "4px", "marginLeft" : "5px",
                            "display" : "inline", "alignItems" : "center", "backgroundColor" : "#f9f9f9",
                            "borderRadius" : "5px"

                            }}>
                                <input 
                                style={{"margin" : "8px"}}
                                type="checkbox" key={tag} value={count}></input>
                                <span style={{"marginRight" : "8px"}}>{tag} {count}</span>
                            </div>
                        </FilterWrapper>
                    ))
    
                ) : (
                    Object.entries(projectTagFrequency)
                    .sort(([, countA], [, countB]) => countB - countA)
                    .map(([tag, count]) => (
                        <FilterWrapper>
                            <div style={{border : "1px solid black", margin: "4px", "marginLeft" : "5px",
                            "display" : "inline", "alignItems" : "center", "backgroundColor" : "#f9f9f9",
                            "borderRadius" : "5px"

                            }}>
                                <input 
                                style={{"margin" : "8px"}}
                                type="checkbox" key={tag} value={count}></input>
                                <span style={{"marginRight" : "8px"}}>{tag} {count}</span>
                            </div>
                        </FilterWrapper>
                    ))
                )}

            </FilterWrapper>
            <ProjectContainer>
                {props.isBlogs ? (
                    listOfBlog.map((blog) => (
                        <ProjectCard id={blog.id} image_url={blog.image_url} name={blog.name} description={blog.description} markdown={blog.markdown} tags={blog.tags}
                        haveCarousel={blog.haveCarousel} htmlFile={blog.htmlFile}
                        ></ProjectCard>
                    ))
                    
                ) : (
                    listOfProject.map((project) => (
                        <ProjectCard id={project.id} image_url={project.image_url} name={project.name} description={project.description} markdown={project.markdown} tags={project.tags}
                        haveCarousel={project.haveCarousel} htmlFile={project.htmlFile}

                        ></ProjectCard>
                    ))
                )}
    
            </ProjectContainer>

        </ProjectContainerBackground>
    )

}

export default Projects;