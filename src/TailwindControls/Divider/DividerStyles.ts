import type { IStyle } from '../../IStyle';
import { getStyles } from '../../utils';
import type { ColorStyle } from '../Color/ColorStyle';
import clone from 'lodash/cloneDeep';

class DividerStyles implements IStyle {
  color: ColorStyle[];
  style: string;
  width: string;
  opacity: string;
  default: DividerStyles;

  reset = (): DividerStyles => {
    this.color = this.color.slice(0, this.default.color.length);
    this.color.forEach((x) => x.reset());
    const { style, width, opacity } = this.default;
    Object.assign(this, { style, width, opacity });
    return this;
  };

  /**
   *
   */
  constructor(init?: Partial<DividerStyles>) {
    this.color = [];
    Object.assign(this, init);
    this.default = clone<DividerStyles>(this);
  }

  toStyles = () =>
    getStyles([this.color, this.style, this.width, this.opacity]);
}

export { DividerStyles };
