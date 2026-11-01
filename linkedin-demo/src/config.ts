/** Privacy + composition defaults. Flip via env when recording/rendering. */
export const BLUR_FACE = process.env.BLUR_FACE !== 'false';
export const GENERIC_NAMES = process.env.GENERIC_NAMES !== 'false';

export const FPS = 30;
/** Approved cut ~48s (45–54s band). */
export const DURATION_IN_FRAMES = 48 * FPS;

export const WIDTH = 1080;
export const HEIGHT = 1920;

export const COLORS = {
  navy: '#0D1F3C',
  navy2: '#152D54',
  navyDeep: '#060f1e',
  teal: '#0D9488',
  teal2: '#14B8A6',
  gold: '#F59E0B',
  white: '#FFFFFF',
  muted: '#94A3B8',
};

/** Generic learner name when GENERIC_NAMES is on. */
export const LEARNER_FIRST = GENERIC_NAMES ? 'Alex' : 'Alex';
export const LEARNER_LAST = GENERIC_NAMES ? 'Warehouse' : 'Warehouse';

/**
 * Carrier display map for any on-screen copy that might leak real names.
 * Recording script also rewrites DOM text.
 */
export const CARRIER_GENERIC: Record<string, string> = {
  USPS: 'Carrier A',
  Swift: 'Carrier B',
  Speedex: 'Carrier C',
  'Uni Uni': 'Carrier D',
  Gofo: 'Carrier E',
};
