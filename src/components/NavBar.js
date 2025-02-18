import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

// Styled component for the NavBar container
const NavBarContainer = styled.div`
    background-color: rgb(135, 206, 235);
    padding: 10px 20px;
    width: 60%;
    display: flex;
    gap: 20px;
    margin: 10px auto;
    border-radius: 50px;
    justify-content: center;
    align-items: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    @media (max-width: 768px) {
        padding: 0px;
        width: auto;
        gap: 0px;
        border-radius: 0px;
    }
    
`;

// Styled component for the NavBar buttons
const NavBarButton = styled.button`
    border-radius: 30px;
    background-color: white;
    padding: 8px 20px;
    color: #333;
    font-size: 16px;
    font-weight: bold;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        background-color: #ddd;
        transform: scale(1.1);
    }

    @media (max-width: 768px) {
        border-radius: 0px;
    }
`;

const NavBar = () => {
    const navigate = useNavigate();

    const handleClick = (path) => {
        navigate(path);
    }


    return (
        <NavBarContainer>
            <NavBarButton onClick={() => handleClick('/')}>Home</NavBarButton>
            <NavBarButton onClick={() => navigate('/blogs')}>Blogs</NavBarButton>
            <NavBarButton onClick={() => navigate('/contact')}>Contact Me</NavBarButton>
        </NavBarContainer>
    );
};

export default NavBar;