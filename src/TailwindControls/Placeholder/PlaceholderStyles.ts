import type { ColorStyle } from '../Color/ColorStyle';
import type { IStyle } from '../../IStyle';
import { getStyles } from '../../utils';
import clone from 'lodash/cloneDeep';

class PlaceholderStyles implements IStyle {
  color: ColorStyle[];
  opacity: string;
  default: PlaceholderStyles;

  reset = (): PlaceholderStyles => {
    this.color = this.color.slice(0, this.default.color.length);
    this.color.forEach((x) => x.reset());
    this.opacity = this.default.opacity;
    return clone<PlaceholderStyles>(this.default);
  };

  /**
   *
   */
  constructor(init?: Partial<PlaceholderStyles>) {
    this.color = [];
    Object.assign(this, init);
    this.default = clone<PlaceholderStyles>(this);
  }

  toStyles = () => getStyles([this.color, this.opacity]);
}

export { PlaceholderStyles };
