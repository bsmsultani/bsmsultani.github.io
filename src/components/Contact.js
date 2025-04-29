import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 80vh;
    padding: 2rem;
    background-color: rgba(135, 206, 235, 0.3);
`;

const ContactForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 600px;
    background-color: white;
    padding: 2.5rem;
    border-radius: 40px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    
    @media (max-width: 768px) {
        border-radius: 0;
        padding: 1.5rem;
    }
`;

const Title = styled.h1`
    margin-bottom: 2rem;
    color: #2c3e50;
    font-size: 2.5rem;
    font-weight: 600;
    border-bottom: 2px solid #3498db;
    padding-bottom: 10px;
`;

const Input = styled.input`
    width: 100%;
    padding: 12px 15px;
    margin-bottom: 1.5rem;
    border: 1px solid #ddd;
    border-radius: 30px;
    font-size: 1rem;
    transition: all 0.3s ease;
    
    &:focus {
        outline: none;
        border-color: rgb(135, 206, 235);
        box-shadow: 0 0 0 2px rgba(135, 206, 235, 0.2);
    }
    
    &::placeholder {
        color: #aaa;
    }
`;

const TextArea = styled.textarea`
    width: 100%;
    padding: 12px 15px;
    margin-bottom: 1.5rem;
    border: 1px solid #ddd;
    border-radius: 30px;
    min-height: 200px;
    font-size: 1rem;
    resize: vertical;
    transition: all 0.3s ease;
    
    &:focus {
        outline: none;
        border-color: rgb(135, 206, 235);
        box-shadow: 0 0 0 2px rgba(135, 206, 235, 0.2);
    }
    
    &::placeholder {
        color: #aaa;
    }
`;

const SubmitButton = styled.button`
    background-color: rgb(135, 206, 235);
    color: white;
    border: none;
    padding: 12px 30px;
    border-radius: 30px;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;
    
    &:hover {
        background-color: #ddd;
        transform: scale(1.1);
    }
    
    &:active {
        transform: scale(0.95);
    }
    
    @media (max-width: 768px) {
        border-radius: 0;
    }
`;

const ContactMe = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
    };
    
    return (
        <Container>
            <ContactForm onSubmit={handleSubmit}>
                <Title>Contact Me</Title>
                <Input type="text" placeholder="Your Name" required />
                <Input type="email" placeholder="Your Email" required />
                <TextArea placeholder="Your Message" required />
                <SubmitButton type="submit">Send Message</SubmitButton>
            </ContactForm>
        </Container>
    );
};

export default ContactMe;