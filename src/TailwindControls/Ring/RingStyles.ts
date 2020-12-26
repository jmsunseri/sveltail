import { ColorStyle } from '../Color/ColorStyle';

class RingStyles {
  color?: ColorStyle[];
  width?: string;
  opacity?: string;
  offsetWidth?: string;
  offsetColor?: ColorStyle[];
  onFocus?: boolean = true;

  constructor(init?: Partial<RingStyles>) {
    this.color = [new ColorStyle()];
    this.offsetColor = [new ColorStyle()];
    Object.assign(this, init);
  }

  addFocus = (style?: string) =>
    this.onFocus && style ? `focus:${style}` : style;

  toStyles = () =>
    [
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
    ]
      .filter((x) => !!x)
      .join(' ')
      .trim();
}
export { RingStyles };
