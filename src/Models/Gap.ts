import type { Breakpoint } from './Breakpoint';

type Gap =
  | 0
  | 0.5
  | 1
  | 1.5
  | 2
  | 2.5
  | 3
  | 3.5
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 14
  | 16
  | 20
  | 24
  | 28
  | 32
  | 36
  | 40
  | 48
  | 52
  | 56
  | 60
  | 64
  | 72
  | 80
  | 96
  | 'px';

interface IGap {
  x?: Gap;
  y?: Gap;
}

type GapType = IGap | Gap;

const gapToStyle = (gap?: GapType, bp?: Breakpoint) => {
  if (gap) {
    if (typeof gap === 'object') {
      return `${gap.x ? `${bp || ''}gap-x-${gap.x}` : ''}  ${
        gap.y ? `${bp || ''}gap-y-${gap.y}` : ''
      }`.trim();
    } else {
      return `${bp || ''}gap-${gap}`;
    }
  }
  return '';
};

export type { IGap, Gap, GapType };
export { gapToStyle };
