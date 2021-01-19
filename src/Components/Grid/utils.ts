import { breakpointToStyle, IBreakpointStyles } from './BreakpointStyles';

const combine = <T>(
  styles: T[] | T | IBreakpointStyles<T> | IBreakpointStyles<T>[],
  toStyle: (x: T) => string
): string => {
  if (Array.isArray(styles) && styles.length) {
    if ('styles' in styles[0]) {
      return (styles as IBreakpointStyles<T>[])
        .map((x: IBreakpointStyles<T>) => breakpointToStyle(x, toStyle))
        .join(' ')
        .trim();
    } else {
      return (styles as T[]).map(toStyle).join(' ').trim();
    }
  } else if (styles && !Array.isArray(styles)) {
    if (typeof styles === 'object' && 'styles' in styles) {
      return breakpointToStyle(styles as IBreakpointStyles<T>, toStyle);
    } else {
      return toStyle(styles as T);
    }
  }
};

export { combine };
