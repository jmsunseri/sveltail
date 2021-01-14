import type { IStyle } from '../../IStyle';
import { getStyles } from '../../utils';
import type { ColorStyle } from '../Color/ColorStyle';
import type { Variant } from '../../Variants';

class RingStyles implements IStyle {
  color?: ColorStyle[];
  width?: string;
  offsetWidth?: string;
  offsetColor?: ColorStyle[];
  variant?: Variant;

  constructor(init?: Partial<RingStyles>) {
    this.color = [];
    this.offsetColor = [];
    Object.assign(this, init);
  }

  toStyles = () =>
    getStyles(
      [this.color, this.offsetColor, this.width, this.offsetWidth],
      this.variant
    );
}
export { RingStyles };
