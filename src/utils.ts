import type { IStyle } from './IStyle';

const getStyles = (styles: (IStyle | IStyle[] | undefined)[]): string => {
  return styles
    .filter((x: IStyle | IStyle[] | undefined) => !!x)
    .map((x: IStyle | IStyle[]) =>
      Array.isArray(x) ? getStyles(x) : x.toStyles()
    )
    .join(' ')
    .trim();
};

export { getStyles };
