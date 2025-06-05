import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const ProjectCardWrapper = styled.div`
    max-width: 100%;
    border-radius: 32px;
    padding: 16px 10px 24px 10px;
    border: 1px solid #e0e0e0;
    background-color: white;
    text-align: center;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.10);
    transition: all 0.25s cubic-bezier(.4,2,.6,1);
    display: flex;
    flex-direction: column;
    min-height: 300px;
    &:hover {
        background-color: #f3f6ff;
        transform: scale(1.035) translateY(-4px);
        box-shadow: 0 8px 32px #bfc8e655;
    }
    @media (max-width: 900px) {
        max-width: 98vw;
        border-radius: 12px;
        padding: 10px 2px 18px 2px;
        min-height: 250px;
        &:hover {
            transform: scale(1.01);
        }
    }
`;

const ProjectImage = styled.img`
    width: 92%;
    border-radius: inherit;
    cursor: pointer;
    margin-bottom: 10px;
    display: block;
    margin-left: auto;
    margin-right: auto;
`;

const TagsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin-top: auto;
    padding: 10px 5px;
`;

const Tag = styled.span`
    background-color: #DBE2FF;
    margin: 2px;
    padding: 5px 8px;
    flex-shrink: 0;
    border-radius: 5px;
    font-size: 0.9rem;
`;

const ProjectCard = ({ id, image_url, name, description, markdown, tags, haveCarousel, htmlFile, isBlogs }) => {
    const navigate = useNavigate();
    const [htmlContent, setHtmlContent] = useState(null);

    useEffect(() => {
        if (htmlFile) {
            fetch(htmlFile)
                .then(response => response.text())
                .then(htmlResponse => {
                    setHtmlContent(htmlResponse);
                });
        }
    }, [htmlFile]);

    const handleProjectClick = () => {
        if (isBlogs) {
            navigate(`/blogs/${id}`);
        } else {
            navigate(`/projects/${id}`);
        }
    };

    return (
        <ProjectCardWrapper onClick={handleProjectClick}>
            <h3 style={{ margin: "5px", textAlign: "center" }}>{name}</h3>
            <ProjectImage src={image_url} alt={name} />
            <TagsContainer>
                {tags.map((tag, index) => (
                    <Tag key={index}>{tag}</Tag>
                ))}
            </TagsContainer>
        </ProjectCardWrapper>
    );
};

export default ProjectCard;