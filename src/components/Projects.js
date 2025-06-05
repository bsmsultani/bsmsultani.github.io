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
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;
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
        setCurrentPage(1); // Reset to first page when filters change
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

    // Get current items for pagination
    const getCurrentItems = (items) => {
        const filteredItems = filterItems(items);
        const indexOfLastItem = currentPage * itemsPerPage;
        const indexOfFirstItem = indexOfLastItem - itemsPerPage;
        return filteredItems.slice(indexOfFirstItem, indexOfLastItem);
    };

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
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
                            getCurrentItems(listOfBlog).map((blog) => (
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
                            getCurrentItems(listOfProject).map((project) => (
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
                    <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
                        {[...Array(Math.ceil(filterItems(props.isBlogs ? listOfBlog : listOfProject).length / itemsPerPage))].map((_, index) => (
                            <button
                                key={index}
                                onClick={() => handlePageChange(index + 1)}
                                style={{
                                    margin: '0 5px',
                                    padding: '5px 10px',
                                    backgroundColor: currentPage === index + 1 ? '#DBE2FF' : 'white',
                                    border: '1px solid #DBE2FF',
                                    borderRadius: '5px',
                                    cursor: 'pointer'
                                }}
                            >
                                {index + 1}
                            </button>
                        ))}
                    </div>
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