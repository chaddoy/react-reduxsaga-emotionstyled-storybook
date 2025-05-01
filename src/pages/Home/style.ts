import styled from '@emotion/styled';

export const Wrapper = styled.div`
  margin: 0 auto;
  text-align: center;
  place-content: center;
  width: 100vw;
  height: 100vh;

  @media (prefers-reduced-motion: no-preference) {
    a:nth-of-type(2) img {
      animation: logo-spin infinite 20s linear;
    }
  }
`;

export const Img = styled.img`
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;

  &:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  &.react:hover {
    filter: drop-shadow(0 0 2em #61dafbaa);
  }

  @keyframes logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export const Card = styled.div`
  padding: 2em;
`;
