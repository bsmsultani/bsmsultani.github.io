import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

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
    text-decoration: none;

    &:hover {
        background-color: #ddd;
        transform: scale(1.1);
    }

    @media (max-width: 768px) {
        border-radius: 0px;
    }
`;

const NavBar = () => {

    return (
        <NavBarContainer>
            <NavBarButton as={Link} to="/">Home</NavBarButton>
            <NavBarButton as={Link} to="/blogs">Blogs</NavBarButton>
            <NavBarButton as={Link} to="/contact">Contact Me</NavBarButton>
            
            <NavBarButton>Login</NavBarButton>
        </NavBarContainer>
    );
};

export default NavBar;