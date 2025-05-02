import { palette } from './palette';

export const accessibility = {
  focusOutline: `2px solid ${palette.blue[400]}`,
  screenReaderOnly: `
      position: absolute;
      width: 1px;
      height: 1px;
      margin: -1px;
      padding: 0;
      overflow: hidden;
      clip: rect(0 0 0 0);
      white-space: nowrap;
      border: 0;
    `,
};
