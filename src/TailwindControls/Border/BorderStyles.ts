import { ColorStyle } from '../Color/ColorStyle';

class BorderStyles {
  color: ColorStyle[];
  style: string;
  width: string;
  radius: string;
  opacity: string;

  /**
   *
   */
  constructor(init?: Partial<BorderStyles>) {
    this.color = [new ColorStyle()];
    Object.assign(this, init);
  }

  toStyles = () =>
    [
      this.color
        .filter((x) => !!x)
        .map((x) => x.toStyles())
        .join(' ')
        .trim(),
      this.style,
      this.width,
      this.radius,
      this.opacity,
    ]
      .join(' ')
      .trim();
}

export { BorderStyles };
