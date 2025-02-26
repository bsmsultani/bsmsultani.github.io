import styled from "styled-components";

const FooterWrapper = styled.footer`
    width: 100%;
    min-height: 100px;
    background-color: white;
    text-align: center;

`
const Footer = () =>  {
    return (
        <FooterWrapper>
            <sub>Bismillah Sultani</sub>
            <sub>@2025</sub>
        </FooterWrapper>
    )
}


export default Footer;