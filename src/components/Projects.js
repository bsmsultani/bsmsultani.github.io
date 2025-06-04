import { useState, useEffect } from "react";
import { listOfBlog, listOfProject } from './utils.js';
import { useParams, useNavigate } from "react-router-dom";
import ProjectCard from './ProjectCard';
import Sidebar from './Sidebar';
import ProjectModal from './ProjectModal';
import { ProjectsLayout, ProjectContainerBackground, MainContentWrapper, ProjectGrid } from './Projects.styled.js';

const Projects = (props) => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedTags, setSelectedTags] = useState([]);
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

    const { id } = useParams();
    const [modalContent, setModalContent] = useState();
    const [htmlContent, setHtmlContent] = useState();

    useEffect(() => {
        if (id) {
            if (props.isBlogs) {
                const blog = listOfBlog.find(b => b.id.toString() == id);
                setModalContent(blog);
            } else {
                const project = listOfProject.find(p => p.id.toString() == id);
                setModalContent(project);
            }
        }
    }, [id, props.isBlogs])

    useEffect(() => {
        if (modalContent?.htmlFile) {
            fetch(modalContent.htmlFile)
            .then((response) => response.text())
            .then((html) => {
                setHtmlContent(html);
            })
        }
    }, [modalContent])

    const handleTagToggle = (tag) => {
        setSelectedTags(prev => {
            if (prev.includes(tag)) {
                return prev.filter(t => t !== tag);
            } else {
                return [...prev, tag];
            }
        });
    };

    const filterItems = (items) => {
        return items.filter(item => {
            const matchesSearch = item.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                item.description?.toLowerCase().includes(searchTerm.toLowerCase()) || 
                                false;
            const matchesTags = selectedTags.length === 0 || 
                              selectedTags.every(tag => item.tags?.includes(tag));
            return matchesSearch && matchesTags;
        });
    };

    return(
        <ProjectContainerBackground>
            <ProjectsLayout>
       

                <MainContentWrapper>
                <Sidebar
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                    selectedTags={selectedTags}
                    handleTagToggle={handleTagToggle}
                    tagFrequency={props.isBlogs ? blogTagFrequency : projectTagFrequency}
                />
                    <ProjectGrid>
                        {props.isBlogs ? (
                            filterItems(listOfBlog).map((blog) => (
                                <ProjectCard 
                                    key={blog.id}
                                    id={blog.id} 
                                    image_url={blog.image_url} 
                                    name={blog.name} 
                                    description={blog.description} 
                                    markdown={blog.markdown} 
                                    tags={blog.tags}
                                    haveCarousel={blog.haveCarousel} 
                                    htmlFile={blog.htmlFile} 
                                    isBlogs={props.isBlogs}
                                />
                            ))
                        ) : (
                            filterItems(listOfProject).map((project) => (
                                <ProjectCard 
                                    key={project.id}
                                    id={project.id} 
                                    image_url={project.image_url} 
                                    name={project.name} 
                                    description={project.description} 
                                    markdown={project.markdown} 
                                    tags={project.tags}
                                    haveCarousel={project.haveCarousel} 
                                    htmlFile={project.htmlFile} 
                                    isBlogs={props.isBlogs}
                                />
                            ))
                        )}
                    </ProjectGrid>
                </MainContentWrapper>
            </ProjectsLayout>
            <ProjectModal 
                modalContent={modalContent}
                htmlContent={htmlContent}
                setModalContent={setModalContent}
                isBlogs={props.isBlogs}
                navigate={navigate}
            />
        </ProjectContainerBackground>
    )
}

export default Projects;