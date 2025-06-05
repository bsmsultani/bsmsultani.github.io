import React from 'react';
import styled from 'styled-components';

const JourneySection = styled.section`
  width: 100%;
  background: #eaf6fb;
  padding: 48px 0 12px 0;
  margin-top: 0px;
  margin-bottom: 0px;
  @media (max-width: 768px) {
    padding: 32px 0 8px 0;
  }
`;

const JourneyContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 24px;
  position: relative;
  @media (max-width: 768px) {
    padding: 0 16px;
  }
`;

const JourneyTitle = styled.h2`
  font-size: 2.2rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 48px;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 1.8rem;
    margin-bottom: 32px;
  }
`;

const TimelineWrapper = styled.div`
  position: relative;
  &::before {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 4px;
    height: 100%;
    background: #2c3e50;
    @media (max-width: 768px) {
      left: 20px;
    }
  }
`;

const TimelineNode = styled.div`
  display: flex;
  justify-content: ${props => props.position === 'left' ? 'flex-end' : 'flex-start'};
  padding: ${props => props.position === 'left' ? '0 50px 0 0' : '0 0 0 50px'};
  margin-bottom: 48px;
  width: 50%;
  margin-left: ${props => props.position === 'left' ? '0' : '50%'};
  position: relative;

  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
    padding: 0 0 0 50px;
    justify-content: flex-start;
  }

  &::before {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    background: #2c3e50;
    border-radius: 50%;
    top: 0;
    ${props => props.position === 'left' ? 'right: -10px' : 'left: -10px'};

    @media (max-width: 768px) {
      left: 12px;
    }
  }
`;

const NodeContent = styled.div`
  background: white;
  padding: 24px;
  border-radius: 8px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  
  @media (max-width: 768px) {
    padding: 16px;
    max-width: 100%;
  }
`;

const NodeTitle = styled.h3`
  font-size: 1.4rem;
  color: #2c3e50;
  margin-bottom: 12px;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const NodeText = styled.p`
  font-size: 1.1rem;
  color: #3a3a4a;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.5;
  }
`;

const Journey = () => (
  <JourneySection>
    <JourneyContainer>
      <JourneyTitle>My Academic Journey</JourneyTitle>
      <TimelineWrapper>


      <TimelineNode position="right">
          <NodeContent>
            <NodeTitle>Marsden State High School</NodeTitle>
            <NodeText>
              High School Diploma
            </NodeText>
          </NodeContent>
        </TimelineNode>

        <TimelineNode position="left">
          <NodeContent>
            <NodeTitle>Queensland University of Technology</NodeTitle>
            <NodeText>
              Bachelor's degree in Data Science with minors in Artificial Intelligence and Advanced Computing (cloud, parallel computing, etc.)
            </NodeText>
          </NodeContent>
        </TimelineNode>


      </TimelineWrapper>
    </JourneyContainer>
  </JourneySection>
);

export default Journey;