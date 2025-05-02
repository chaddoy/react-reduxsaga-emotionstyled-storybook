import { duration } from './duration';

export const animations = {
  fadeIn: `fade-in ${duration.regular} ease-in-out`,
  fadeOut: `fade-out ${duration.regular} ease-in-out`,
  bounce: `bounce ${duration.slow} infinite`,
  spin: `spin ${duration.quick} linear infinite`,
  pulse: `pulse ${duration.verySlow} infinite`,
};
