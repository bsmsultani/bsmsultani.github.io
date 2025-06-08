import styled from "styled-components";
import { useState } from "react";
const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 80vh;
    padding: 2rem;
    background-color: rgba(135, 206, 235, 0.3);
    backdrop-filter: blur(10px);
    position: relative;
    overflow: hidden;
    
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(45deg, rgba(135, 206, 235, 0.1), rgba(255, 255, 255, 0.1));
        z-index: -1;
    }
`;

const ContactForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 600px;
    background: rgba(255, 255, 255, 0.2);
    padding: 2.5rem;
    border-radius: 40px;
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    border: 1px solid rgba(255, 255, 255, 0.18);
    transition: transform 0.3s ease;
    
    &:hover {
        transform: translateY(-5px);
    }
    
    @media (max-width: 768px) {
        border-radius: 20px;
        padding: 1.5rem;
    }
`;

const Title = styled.h1`
    margin-bottom: 2rem;
    color: rgba(44, 62, 80, 0.9);
    font-size: 2.5rem;
    font-weight: 600;
    border-bottom: 2px solid rgba(52, 152, 219, 0.5);
    padding-bottom: 10px;
    text-align: center;
    
    @media (max-width: 480px) {
        font-size: 2rem;
    }
`;

const InputGroup = styled.div`
    position: relative;
    width: 100%;
    margin-bottom: 1.5rem;
`;

const Label = styled.label`
    position: absolute;
    left: 15px;
    top: -10px;
    background: rgba(255, 255, 255, 0.9);
    padding: 0 5px;
    font-size: 0.8rem;
    color: rgba(44, 62, 80, 0.7);
    border-radius: 4px;
`;

const Input = styled.input`
    width: 100%;
    padding: 12px 15px;
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 30px;
    font-size: 1rem;
    background: rgba(255, 255, 255, 0.2);
    color: rgba(44, 62, 80, 0.9);
    transition: all 0.3s ease;
    
    &:focus {
        outline: none;
        border-color: rgba(135, 206, 235, 0.5);
        box-shadow: 0 0 0 2px rgba(135, 206, 235, 0.2);
        background: rgba(255, 255, 255, 0.3);
    }
    
    &::placeholder {
        color: rgba(170, 170, 170, 0.8);
    }
`;

const TextArea = styled.textarea`
    width: 100%;
    padding: 12px 15px;
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 30px;
    min-height: 200px;
    font-size: 1rem;
    resize: vertical;
    background: rgba(255, 255, 255, 0.2);
    color: rgba(44, 62, 80, 0.9);
    transition: all 0.3s ease;
    
    &:focus {
        outline: none;
        border-color: rgba(135, 206, 235, 0.5);
        box-shadow: 0 0 0 2px rgba(135, 206, 235, 0.2);
        background: rgba(255, 255, 255, 0.3);
    }
    
    &::placeholder {
        color: rgba(170, 170, 170, 0.8);
    }
`;

const SubmitButton = styled.button`
    background: linear-gradient(45deg, rgba(135, 206, 235, 0.3), rgba(135, 206, 235, 0.5));
    color: rgba(44, 62, 80, 0.9);
    border: 1px solid rgba(255, 255, 255, 0.3);
    padding: 12px 40px;
    border-radius: 30px;
    font-size: 1.1rem;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;
    backdrop-filter: blur(4px);
    position: relative;
    overflow: hidden;
    
    &:before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(
            120deg,
            transparent,
            rgba(255, 255, 255, 0.3),
            transparent
        );
        transition: 0.5s;
    }
    
    &:hover {
        background: linear-gradient(45deg, rgba(135, 206, 235, 0.5), rgba(135, 206, 235, 0.7));
        transform: translateY(-3px);
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        
        &:before {
            left: 100%;
        }
    }
    
    &:active {
        transform: translateY(1px);
    }
`;

const SuccessMessage = styled.div`
    color: #2ecc71;
    margin-top: 1rem;
    font-size: 1rem;
    text-align: center;
`;

const ContactMe = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 3000);
        setFormData({ name: '', email: '', message: '' });
    };
    
    return (
        <Container>
            <ContactForm onSubmit={handleSubmit}>
                <Title>Contact Me</Title>
                <InputGroup>
                    <Input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name" 
                        required 
                    />
                </InputGroup>
                <InputGroup>
                    <Input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your Email" 
                        required 
                    />
                </InputGroup>
                <InputGroup>
                    <TextArea 
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your Message" 
                        required 
                    />
                </InputGroup>
                <SubmitButton type="submit">Send Message</SubmitButton>
                {isSubmitted && <SuccessMessage>Message sent successfully!</SuccessMessage>}
            </ContactForm>
        </Container>
    );
};

export default ContactMe;