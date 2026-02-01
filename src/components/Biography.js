import styled from 'styled-components';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const BiographyContainer = styled.div`
    width: 60%;
    height: auto;
    margin: 20px auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 40px;
    padding: 20px;
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
    border-radius: 15px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);

    @media (max-width: 768px) {
        flex-direction: column;
        width: 90%;
        gap: 20px;
    }
`;

const BioContent = styled.div`
    flex: 2;
    
    h1 {
        font-size: 2.5rem;
        margin-bottom: 20px;
        background: linear-gradient(45deg, #2196F3, #E91E63);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    p {
        font-size: 1.1rem;
        line-height: 1.6;
        margin-bottom: 25px;
        color: #333;
    }
`;

const SocialLinks = styled.div`
    display: flex;
    gap: 20px;
    align-items: center;

    a {
        transition: transform 0.2s ease;
        
        &:hover {
            transform: translateY(-3px);
        }
    }
`;

const BioImage = styled.img`
    height: auto;
    max-height: 300px;
    border-radius: 15px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
    transition: transform 0.3s ease;
    
    &:hover {
        transform: scale(1.02);
    }
`;

const Biography = () => {
    return (
        <BiographyContainer>
            <BioContent>
                <h1>Hello Friends! 👋</h1>
                <p>
                    My name is Bismillah, Millah for short! I am an Entrepreneur, a Data Scientist, and a Software Developer.
                    I love programming, AI and data. On my free time I like to read,
                    go to the gym, hike and code! I love meeting new people, you can reach out to me via my socials:
                </p>
                <SocialLinks>
                    <a href='https://www.linkedin.com/in/bsmsultani/' target='_blank' rel="noopener noreferrer" aria-label="LinkedIn">
                        <FaLinkedin size={35} color="#0077B5" />
                    </a>
                    <a href='https://github.com/bsmsultani' target='_blank' rel="noopener noreferrer" aria-label="GitHub">
                        <FaGithub size={35} color="#24292e" />
                    </a>
                    <a href='https://leetcode.com/u/i9yc2Z7TeD/' target='_blank' rel="noopener noreferrer" aria-label="LeetCode">
                        <img src='leetcode_logo.png' width={35} height={35} alt="LeetCode" />
                    </a>
                </SocialLinks>
            </BioContent>
            <BioImage src="IMG_6559.jpeg" alt="Profile" loading="lazy" />
        </BiographyContainer>
    );
};

export default Biography;