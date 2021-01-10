import type { IStyle } from '../../IStyle';
import { getStyles } from '../../utils';
import type { ColorStyle } from '../Color/ColorStyle';

class BorderStyles implements IStyle {
  color: ColorStyle[];
  style: string;
  width: string;
  radius: string;
  opacity: string;

  /**
   *
   */
  constructor(init?: Partial<BorderStyles>) {
    this.color = [];
    Object.assign(this, init);
  }

  toStyles = () =>
    getStyles([this.color, this.style, this.width, this.radius, this.opacity]);
}

export { BorderStyles };
