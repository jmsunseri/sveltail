import type { Breakpoint } from '../../Breakpoint';
import { combine } from './utils';

interface IBreakpointStyles<T> {
  breakpoint?: Breakpoint;
  styles: T | T[];
}

const breakpointToStyle = <T extends unknown>(
  b: IBreakpointStyles<T>,
  toStyle: (x: T) => string
): string => {
  const result = combine(
    b.styles,
    (y: T) => `${b.breakpoint || ''}${toStyle(y)}`
  );
  return result;
};

export type { IBreakpointStyles };
export { breakpointToStyle };
