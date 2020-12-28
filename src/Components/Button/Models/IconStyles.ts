import type { IStyle } from '../../../IStyle';
import { ColorStyle } from '../../../TailwindControls/Color/ColorStyle';
import { SizingStyles } from '../../../TailwindControls/Sizing/SizingStyles';
import { getStyles } from '../../../utils';

class IconStyles implements IStyle {
  color?: ColorStyle[];
  size?: SizingStyles;

  constructor(init?: Partial<IconStyles>) {
    this.color = [new ColorStyle()];
    this.size = new SizingStyles();
    Object.assign(this, init);
  }

  toStyles = () => getStyles([this.color, this.size]);
}

export { IconStyles };
