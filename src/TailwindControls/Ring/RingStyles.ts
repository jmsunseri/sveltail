import type { IStyle } from '../../IStyle';
import { getStyles } from '../../utils';
import type { ColorStyle } from '../Color/ColorStyle';
import clone from 'lodash/cloneDeep';

class RingStyles implements IStyle {
  color?: ColorStyle[];
  width?: string;
  opacity?: string;
  offsetWidth?: string;
  offsetColor?: ColorStyle[];
  onFocus?: boolean = true;
  default: RingStyles;

  reset = (): RingStyles => {
    this.color = this.color.slice(0, this.default.color.length);
    this.color.forEach((x) => x.reset());
    this.offsetColor = this.offsetColor.slice(
      0,
      this.default.offsetColor.length
    );
    this.offsetColor.forEach((x) => x.reset());
    const { width, opacity, offsetWidth, onFocus } = this.default;
    Object.assign({ width, opacity, offsetWidth, onFocus });
    return this;
  };

  constructor(init?: Partial<RingStyles>) {
    this.color = [];
    this.offsetColor = [];
    Object.assign(this, init);
    this.default = clone<RingStyles>(this);
  }

  addFocus = (style?: string) =>
    this.onFocus && style ? `focus:${style}` : style;

  toStyles = () =>
    getStyles([
      this.color
        .filter((x) => !!x)
        .map((x) => (x.isHover ? x.toStyles() : this.addFocus(x.toStyles())))
        .join(' ')
        .trim(),
      this.offsetColor
        .filter((x) => !!x)
        .map((x) => (x.isHover ? x.toStyles() : this.addFocus(x.toStyles())))
        .join(' ')
        .trim(),
      this.addFocus(this.width),
      this.addFocus(this.opacity),
      this.addFocus(this.offsetWidth),
    ]);
}
export { RingStyles };
