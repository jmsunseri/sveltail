import type { IStyle } from '../../IStyle';
import { getStyles } from '../../utils';
import type { ColorStyle } from '../Color/ColorStyle';
import clone from 'lodash/cloneDeep';

class FontStyles implements IStyle {
  color?: ColorStyle[];
  weight?: string;
  size?: string;
  family?: string;
  italics?: string;
  default: FontStyles;

  reset = (): FontStyles => {
    this.color = this.color.slice(0, this.default.color.length);
    this.color.forEach((x) => x.reset());
    const { weight, size, family, italics } = this.default;
    Object.assign(this, { weight, size, family, italics });
    return this;
  };

  constructor(init?: Partial<FontStyles>) {
    this.color = [];
    Object.assign(this, init);
    this.default = clone<FontStyles>(this);
  }

  toStyles = () =>
    getStyles([this.color, this.weight, this.size, this.family, this.italics]);
}

export { FontStyles };
