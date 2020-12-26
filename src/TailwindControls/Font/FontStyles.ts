import { ColorStyle } from '../Color/ColorStyle';

class FontStyles {
  color?: ColorStyle[];
  weight?: string;
  size?: string;
  family?: string;
  italics?: string;

  constructor(init?: Partial<FontStyles>) {
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
      this.weight,
      this.size,
      this.family,
      this.italics,
    ]
      .filter((x) => !!x)
      .join(' ')
      .trim();
}

export { FontStyles };
