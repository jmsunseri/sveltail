import type { IStyle } from './IStyle';

const getStyles = (
  styles: (IStyle | IStyle[] | string | undefined)[]
): string => {
  return styles
    .filter((x: IStyle | IStyle[] | undefined) => !!x)
    .map((x: IStyle | IStyle[] | string) => {
      if (!!(x as IStyle).toStyles) {
        return (x as IStyle).toStyles();
      } else if (Array.isArray(x)) {
        return getStyles(x);
      } else {
        return x;
      }
    })
    .join(' ')
    .trim();
};

export { getStyles };
