import React from 'react';
import styled from 'styled-components';

const Loader = () => {
  return (
    <StyledWrapper>
      <div className="loader" />
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .loader {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: 8px solid transparent;
    border-top: 8px solid #ffffff;
    border-right: 8px solid #1F4789;
    border-bottom: 8px solid #EFC40F;
    border-left: 8px solid #130F2D;

    animation:
      rotate-color 2s linear infinite,
      morph 2s ease-in-out infinite;
  }

  @keyframes rotate-color {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes morph {
    0%,
    100% {
      border-radius: 50%;
      width: 80px;
      height: 80px;
    }
    50% {
      border-radius: 10%;
      width: 100px;
      height: 100px;
    }
  }`;

export default Loader;
