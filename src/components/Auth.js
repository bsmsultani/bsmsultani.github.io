import styled from "styled-components";

const AuthContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80vh;
    flex-direction: column;
`

const Input = styled.input`
    all: unset;
    padding: 20px;
    border-radius: 30px;
    display: block;
    margin: 10px;
    &[type="button"] {
        
        background-color: rgb(135, 206, 235);;
        padding: 8px 20px;
        color: white;
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
    }

    &[type = "email"],
    &[type = "password"],
    &[type = "text"]{
        border: 1px solid black;

    }

`

const Authentication = () => {
    return (
        <AuthContainer>
            <h1>Authorised Users</h1>
            <Input type="email" placeholder="email"></Input>
            <Input type="password" placeholder="password"></Input>
            <Input type="button" value="Login"></Input>
        </AuthContainer>
    )
}

export default Authentication;
export { Input };