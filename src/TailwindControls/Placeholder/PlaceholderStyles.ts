import { ColorStyle } from '../Color/ColorStyle';
import type { IStyle } from '../../IStyle';

class PlaceholderStyles implements IStyle {
  color: ColorStyle[];
  opacity: string;

  /**
   *
   */
  constructor(init?: Partial<PlaceholderStyles>) {
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
      this.opacity,
    ]
      .join(' ')
      .trim();
}

export { PlaceholderStyles };
