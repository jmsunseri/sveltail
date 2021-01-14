import type { IStyle } from '../../IStyle';
import { getStyles } from '../../utils';
import type { Variant } from '../../Variants';

class ColorStyle implements IStyle {
  color?: string;
  from?: string;
  to?: string;
  via?: string;
  direction?: string;
  isGradient?: boolean;
  variant?: Variant;
  opacity?: string;
  // isHover?: boolean;
  getMarkup = (): string => {
    return this.toStyles();
  };

  constructor(init?: Partial<ColorStyle>) {
    Object.assign(this, init);
  }

  toStyles = () => {
    if (!this.isGradient) {
      return getStyles([this.color, this.opacity]);
    } else {
      return getStyles([
        this.direction,
        this.from,
        this.to,
        this.via,
        this.opacity,
      ]);
    }
  };
}

export { ColorStyle };
