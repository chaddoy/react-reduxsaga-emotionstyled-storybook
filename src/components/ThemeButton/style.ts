import styled from '@emotion/styled';

export const Wrapper = styled.div`
  ${({ theme }) => `
    position: fixed;
    right: 0;
    padding: 10px;

    button {
      font-size: ${theme.fontSize['2xl']};
      padding: 8px 8px 4px;
    }
  `}
`;
