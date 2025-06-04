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
    &:hover {
        background-color: #f3f6ff;
        transform: scale(1.035) translateY(-4px);
        box-shadow: 0 8px 32px #bfc8e655;
    }
    @media (max-width: 900px) {
        max-width: 98vw;
        border-radius: 12px;
        padding: 10px 2px 18px 2px;
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
            <p>{description}</p>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center" }}>
                {tags.map((tag, index) => (
                    <span key={index} style={{ backgroundColor: "#DBE2FF", margin: "1px", padding: "5px", flexShrink: 0, borderRadius: "5px" }}>{tag}</span>
                ))}
            </div>
        </ProjectCardWrapper>
    );
};

export default ProjectCard; 