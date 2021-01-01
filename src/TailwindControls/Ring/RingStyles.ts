import type { IStyle } from '../../IStyle';
import { getStyles } from '../../utils';
import type { ColorStyle } from '../Color/ColorStyle';
import clone from 'lodash/cloneDeep';
import type { Variant } from '../../Variants';

class RingStyles implements IStyle {
  color?: ColorStyle[];
  width?: string;
  opacity?: string;
  offsetWidth?: string;
  offsetColor?: ColorStyle[];
  default: RingStyles;
  variant?: Variant;

  reset = (): RingStyles => {
    this.color = this.color.slice(0, this.default.color.length);
    this.color.forEach((x) => x.reset());
    this.offsetColor = this.offsetColor.slice(
      0,
      this.default.offsetColor.length
    );
    this.offsetColor.forEach((x) => x.reset());
    const { width, opacity, offsetWidth, variant } = this.default;
    Object.assign({ width, opacity, offsetWidth, variant });
    return this;
  };

  constructor(init?: Partial<RingStyles>) {
    this.color = [];
    this.offsetColor = [];
    Object.assign(this, init);
    this.default = clone<RingStyles>(this);
  }

  toStyles = () =>
    getStyles(
      [
        this.color,
        this.offsetColor,
        this.width,
        this.opacity,
        this.offsetWidth,
      ],
      this.variant
    );
}
export { RingStyles };
