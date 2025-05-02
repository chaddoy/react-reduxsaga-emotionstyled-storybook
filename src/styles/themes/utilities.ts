export const utilities = {
  container: {
    maxWidth: '1200px',
    padding: '16px',
    margin: '0 auto',
  },
  flex: {
    center: `
        display: flex;
        justify-content: center;
        align-items: center;
      `,
    between: `
        display: flex;
        justify-content: space-between;
        align-items: center;
      `,
    column: `
        display: flex;
        flex-direction: column;
      `,
  },
  grid: {
    columns: 12,
    gutter: '16px',
  },
};
