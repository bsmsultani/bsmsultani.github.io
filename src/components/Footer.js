import styled from "styled-components";

const FooterWrapper = styled.footer`
    width: 100%;
    min-height: 100px;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`
const Footer = () =>  {
    return (
        <FooterWrapper>
            <sub>Bismillah Sultani</sub>
            <br></br>
            <sub>@2025</sub>
        </FooterWrapper>
    )
}


export default Footer;