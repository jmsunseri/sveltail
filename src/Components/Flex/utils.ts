import type { Breakpoint } from '../../Models/Breakpoint';

const combine = <T>(
  toStyle: (x: T, breakpoint: Breakpoint) => string,
  styles?: T[] | T,
  breakpoint?: Breakpoint
): string => {
  if (!styles) {
    return '';
  } else if (Array.isArray(styles) && styles.length) {
    return (styles as T[])
      .map((s) => toStyle(s, breakpoint))
      .join(' ')
      .trim();
  } else if (styles && !Array.isArray(styles)) {
    return toStyle(styles as T, breakpoint);
  }
};

export { combine };
