import styled from "styled-components";
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
const FooterWrapper = styled.footer`
    width: 100%;
    min-height: 120px;
    background-color: #f8f9fa;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px 0;
    border-top: 1px solid #e7e7e7;
`

const SocialLinks = styled.div`
    display: flex;
    gap: 20px;
    margin-bottom: 15px;
`

const SocialIcon = styled.a`
    color: #333;
    font-size: 24px;
    transition: color 0.3s ease;
    
    &:hover {
        color: #0066cc;
    }
`

const Copyright = styled.div`
    font-size: 0.9rem;
    color: #666;
    text-align: center;
`

const Footer = () =>  {
    return (
        <FooterWrapper>
            <SocialLinks>
                <SocialIcon href="https://github.com/bsmsultani" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </SocialIcon>
                <SocialIcon href="https://linkedin.com/in/bsmsultani" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                </SocialIcon>
                <SocialIcon href="mailto:chomp-alike-hardly@duck.com">
                    <FaEnvelope />
                </SocialIcon>
            </SocialLinks>
            <Copyright>
                <div>Bismillah Sultani</div>
                <div>© {new Date().getFullYear()} All rights reserved</div>
            </Copyright>
        </FooterWrapper>
    )
}

export default Footer;
