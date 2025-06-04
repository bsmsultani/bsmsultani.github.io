import styled from "styled-components";
import { RxCross2 } from "react-icons/rx";
import MarkdownRenderer from './Markdown.js';

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

const ProjectModal = ({ modalContent, htmlContent, setModalContent, isBlogs, navigate }) => {
    if (!modalContent) return null;
    return (
        <div style={{ all: "unset" }}>
            <Overlay></Overlay>
            <Popup>
                <div>
                    <RxCross2 style={{ cursor: "pointer" }} size={32} onClick={() => {
                        setModalContent("");
                        if (isBlogs) {
                            navigate("/blogs");
                        } else {
                            navigate("/");
                        }
                    }} />
                </div>
                {modalContent.haveCarousel ? (
                    <></> // Carousel can be added here if needed
                ) : null}
                <MarkDownWrapper>
                    <div className=".markdown-container">
                        <MarkdownRenderer markdownContent={modalContent.markdown} />
                        {modalContent.htmlFile ? (
                            <div dangerouslySetInnerHTML={{ __html: htmlContent }}></div>
                        ) : null}
                    </div>
                </MarkDownWrapper>
            </Popup>
        </div>
    );
};

export default ProjectModal; 