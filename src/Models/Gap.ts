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
  number: Gap;
  direction?: 'x' | 'y';
}

export type GapType = IGap | IGap[] | Gap;

export const toStyle = (gap: IGap | Gap, bp?: Breakpoint) => {
  if (typeof gap === 'object') {
    return `${bp || ''}gap-${gap.direction}-${gap.number}`;
  } else {
    return `${bp || ''}gap-${gap}`;
  }
};

export type { IGap, Gap };
