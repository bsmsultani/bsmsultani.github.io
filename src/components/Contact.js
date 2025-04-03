import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    justify-items: center;
    align-items: center;
    height: 80vh;

    & > div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;

    }

`

const TextArea = styled.textarea`
    all: unset;
    border: 1px solid black;
    padding: 10px;
    border-radius: 0px 0px 5px 5px;
    min-width: 40%;
    min-height: 300px;
    margin-top: 5px;
`

const Input  = styled.input`
    all: unset;
    border: 1px solid black;
    padding: 8px;
    border-radius: 0px;
    width: 20%;

    margin-top: 10px;


`
const ContactMe = () => {
    return (
        <Container>
            <h1>Under Construction</h1>
       </Container>
    )
}

export default ContactMe;