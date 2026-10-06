import React from 'react';

const css = `
  .loader-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .loader {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: 8px solid transparent;
    border-top-color: #ffffff;
    border-right-color: #1F4789;
    border-bottom-color: #EFC40F;
    border-left-color: #130F2D;

    animation: loader-spin-morph 2s ease-in-out infinite;
  }

  @keyframes loader-spin-morph {
    0% {
      transform: rotate(0deg) scale(1);
      border-radius: 50%;
    }
    50% {
      transform: rotate(180deg) scale(1.25);
      border-radius: 10%;
    }
    100% {
      transform: rotate(360deg) scale(1);
      border-radius: 50%;
    }
  }
`;

const Loader = () => {
  return (
    <>
      <style>{css}</style>
      <div className="loader-wrapper">
        <div className="loader" />
      </div>
    </>
  );
};

export default Loader;