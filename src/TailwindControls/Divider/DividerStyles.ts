import type { IStyle } from '../../IStyle';
import { getStyles } from '../../utils';
import type { ColorStyle } from '../Color/ColorStyle';

class DividerStyles implements IStyle {
  color: ColorStyle[];
  style: string;
  width: string;
  opacity: string;

  constructor(init?: Partial<DividerStyles>) {
    this.color = [];
    Object.assign(this, init);
  }

  toStyles = () =>
    getStyles([this.color, this.style, this.width, this.opacity]);
}

export { DividerStyles };
