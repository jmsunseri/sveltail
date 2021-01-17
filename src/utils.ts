import type { IStyle } from './IStyle';
import type { Variant } from './Variant';

const getStyles = (
  styles: (IStyle | IStyle[] | string | undefined)[],
  variant?: Variant
): string => {
  return styles
    .filter((x: IStyle | IStyle[] | undefined) => !!x)
    .map((x: IStyle | IStyle[] | string) => {
      if (!!(x as IStyle).toStyles) {
        return (x as IStyle).toStyles();
      } else if (Array.isArray(x)) {
        return getStyles(x);
      } else {
        if (variant) {
          return `${variant}${x}`;
        } else {
          return x;
        }
      }
    })
    .join(' ')
    .trim();
};

export { getStyles };
