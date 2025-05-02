import { duration } from './duration';

export const transitions = {
  default: `all ${duration.regular} ease-in-out`, // Default transition
  fast: `all ${duration.quick} ease-in-out`, // Fast transition
  slow: `all ${duration.slow} ease-in-out`, // Slow transition
};
