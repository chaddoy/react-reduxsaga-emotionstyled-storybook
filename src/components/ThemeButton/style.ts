import styled from '@emotion/styled';

export const Wrapper = styled.div`
  ${({ theme }) => `
    button {
      font-size: ${theme.typography.fontSize['2xl']};
      padding: 8px 8px 4px;
    }
  `}
`;
