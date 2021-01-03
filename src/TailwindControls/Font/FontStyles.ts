import type { IStyle } from '../../IStyle';
import { getStyles } from '../../utils';
import type { ColorStyle } from '../Color/ColorStyle';

class FontStyles implements IStyle {
  color?: ColorStyle[];
  weight?: string;
  size?: string;
  family?: string;
  italics?: string;
  default: FontStyles;

  constructor(init?: Partial<FontStyles>) {
    this.color = [];
    Object.assign(this, init);
  }

  toStyles = () =>
    getStyles([this.color, this.weight, this.size, this.family, this.italics]);
}

export { FontStyles };
