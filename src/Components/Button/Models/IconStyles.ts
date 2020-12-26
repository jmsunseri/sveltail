import { ColorStyle } from '../../../TailwindControls/Color/ColorStyle';
import { SizingStyles } from '../../../TailwindControls/Sizing/SizingStyles';

class IconStyles {
  color?: ColorStyle[];
  size?: SizingStyles;

  constructor(init?: Partial<IconStyles>) {
    this.color = [new ColorStyle()];
    this.size = new SizingStyles();
    Object.assign(this, init);
  }

  toStyles = () =>
    [
      this.color
        ?.map((x) => x.toStyles())
        .join(' ')
        .trim(),
      this.size?.toStyles(),
    ]
      .filter((x) => !!x)
      .join(' ')
      .trim();
}

export { IconStyles };
