import type { IStyle } from '../../IStyle';

class ColorStyle implements IStyle {
  color?: string;
  isHover?: boolean;
  isGradient?: boolean;
  getMarkup = (): string => {
    return this.toStyles();
  };

  constructor(init?: Partial<ColorStyle>) {
    Object.assign(this, init);
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
