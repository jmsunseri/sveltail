import type { IStyle } from '../../IStyle';
import { getStyles } from '../../utils';
import type { ColorStyle } from '../Color/ColorStyle';
import clone from 'lodash/cloneDeep';

class BorderStyles implements IStyle {
  color: ColorStyle[];
  style: string;
  width: string;
  radius: string;
  opacity: string;
  default: BorderStyles;

  reset = (): BorderStyles => {
    this.color = this.color.slice(0, this.default.color.length);
    this.color.forEach((x) => x.reset());
    const { style, width, radius, opacity } = this.default;
    Object.assign(this, { style, width, radius, opacity });
    return this;
  };

  /**
   *
   */
  constructor(init?: Partial<BorderStyles>) {
    this.color = [];
    Object.assign(this, init);
    this.default = clone<BorderStyles>(this);
  }

  toStyles = () =>
    getStyles([this.color, this.style, this.width, this.radius, this.opacity]);
}

export { BorderStyles };
