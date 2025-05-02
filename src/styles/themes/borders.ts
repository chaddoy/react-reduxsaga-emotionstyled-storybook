const width = {
  none: '0', // 0px
  hairline: '1px', // 1px (thin border)
  thin: '2px', // 2px
  medium: '4px', // 4px
  thick: '8px', // 8px
  heavy: '16px', // 16px
};

export const borders = {
  radius: {
    none: '0', // 0px
    xxs: '0.125rem', // 2px
    xs: '0.25rem', // 4px
    sm: '0.375rem', // 6px
    md: '0.5rem', // 8px
    lg: '0.75rem', // 12px
    xl: '1rem', // 16px
    xxl: '1.5rem', // 24px
    full: '9999px', // Large radius for circular shapes
  },
  width,
  solid: {
    none: `${width.none} solid rgba(0, 0, 0, 0)`, // No border
    hairline: `${width.hairline} solid rgba(0, 0, 0, 0.1)`, // Hairline border
    thin: `${width.thin} solid rgba(0, 0, 0, 0.2)`, // Thin border
    medium: `${width.medium} solid rgba(0, 0, 0, 0.3)`, // Medium border
    thick: `${width.thick} solid rgba(0, 0, 0, 0.4)`, // Thick border
    heavy: `${width.heavy} solid rgba(0, 0, 0, 0.5)`, // Heavy border
  },
};
