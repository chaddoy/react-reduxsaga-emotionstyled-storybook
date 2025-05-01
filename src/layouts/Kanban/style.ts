import styled from '@emotion/styled';

export const KanbanLayoutWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const HeaderWrapper = styled.div`
  ${({ theme }) => `
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 14px;
    background-color: ${theme.colors.secondary};
    box-shadow: ${theme.shadows.elevation[2]};
    position: relative;
    z-index: 1;
  `}
`;

export const Body = styled.div`
  display: flex;
  flex-grow: 1;
`;

export const LeftSidebarWrapper = styled.div`
  ${({ theme }) => `
    min-width: 240px;
    flex-shrink: 1;
    padding: 10px;
    background-color: ${theme.colors.secondary};
  `}
`;

export const Content = styled.div`
  ${({ theme }) => `
    background-color: ${theme.colors.secondary};
    border-left: 2px solid ${theme.colors.tertiary};
    flex-grow: 1;
  `}
`;
