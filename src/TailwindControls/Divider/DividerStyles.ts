import { ColorStyle } from '../Color/ColorStyle';

class DividerStyles {
  color: ColorStyle[];
  style: string;
  width: string;
  opacity: string;

  /**
   *
   */
  constructor(init?: Partial<DividerStyles>) {
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
      this.opacity,
    ]
      .join(' ')
      .trim();
}

export { DividerStyles };
