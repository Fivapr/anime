import React from 'react';
import styled from 'styled-components';

const StyledSubtitles = styled.div`
  position: absolute;
  bottom: 12%;
  width: 90%;
  margin: 0 5%;
  text-align: center;
  box-sizing: border-box;
  background: rgba(0, 0, 0, 0.5);
  font-family: Helvetica, Arial, sans-serif;
  font-size: 24px;
  text-shadow: #000000 1px 1px 0px;
  color: #fc6;
  line-height: 1.3;
`;

const Subtitles = ({ currentSub }) => (
  <StyledSubtitles>
    {currentSub}
  </StyledSubtitles>
);

export default Subtitles;
