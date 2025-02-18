import styled from 'styled-components';
import { FaLinkedin } from 'react-icons/fa';

const BiographyContainer = styled.div`
    width: 50%;
    height: auto;
    margin: 10px auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;

    @media (max-width: 768px) {
        flex-direction: column;
        width: 80%;
    }
`;

const BioImage = styled.img`
    height: auto;
    max-height: 250px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Biography = () => {
    return (
        <BiographyContainer>
            <div>
                <h1>Hello Friends!</h1>
                <p>
                    My name is Bismillah, Millah for short! I am an Entrepreneur, a Data Scientist, and a Software Developer.
                    I love programming, AI and data and my dream is to build my own start up! On my free time, I like to read,
                    go to the gym, hike and take cold plunges! I love meeting new people, you can reach out to me via my socials:
                </p>
                <a href='https://www.linkedin.com/in/bsmsultani/' target='_blank'>
                    <FaLinkedin size={32} color="#0077B5"></FaLinkedin>
                </a>
            </div>
            <BioImage src="IMG_6559.jpeg" alt="Profile" />
        </BiographyContainer>
    );
};

export default Biography;