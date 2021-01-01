import type { IStyle } from '../../IStyle';
import clone from 'lodash/cloneDeep';

class ColorStyle implements IStyle {
  color?: string;
  isHover?: boolean;
  isGradient?: boolean;
  default: ColorStyle;
  name: string;
  getMarkup = (): string => {
    return this.toStyles();
  };

  reset = (): ColorStyle => {
    this.color = this.default.color;
    this.isHover = this.default.isHover;
    this.isGradient = this.default.isGradient;
    return this;
  };

  constructor(init?: Partial<ColorStyle>) {
    Object.assign(this, init);
    this.default = clone<ColorStyle>(this);
  }

  toStyles = () =>
    this.isHover && this.color
      ? this.color
          .split(' ')
          .map((x) => (x.includes('gradient') ? x : `hover:${x}`))
          .join(' ')
          .trim()
      : this.color || '';
}

export { ColorStyle };
