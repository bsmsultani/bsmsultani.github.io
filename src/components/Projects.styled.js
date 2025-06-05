import styled from "styled-components";

export const ProjectsLayout = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
`;

export const ProjectContainerBackground = styled.div`
    background-color: rgba(135, 206, 235, 0.3);
    @media (max-width: 768px) {
        padding: 0px;
    }
`;

export const MainContentWrapper = styled.div`
    flex: 1;
    padding-top: 12px;
    padding-left: 12px;
    @media (max-width: 900px) {
        padding-left: 0;
    }
`;

export const ProjectGrid = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 24px 20px;
    justify-content: flex-start;
    width: 100%;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 24px;
    padding-right: 24px;
    @media (max-width: 900px) {
        flex-direction: column;
        align-items: center;
        gap: 24px 0;
        padding-left: 0;
        padding-right: 0;
        & > * {
            max-width: 98vw;
            min-width: 0;
        }
    }
    & > * {
        flex: 1 1 320px;
        max-width: 360px;
        min-width: 280px;
        margin: 0 auto;
    }
`; 