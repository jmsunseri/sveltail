import type { IStyle } from '../../../IStyle';
import type { ColorStyle } from '../../../TailwindControls/Color/ColorStyle';
import { getStyles } from '../../../utils';

class IconStyles implements IStyle {
  color?: ColorStyle[];
  size?: number;
  stroke?: number;
  getMarkup = (): string => {
    return this.toStyles();
  };

  constructor(init?: Partial<IconStyles>) {
    this.color = [];
    this.size = 24;
    this.stroke = 3;
    Object.assign(this, init);
  }

  toStyles = () => getStyles([this.color]);
}

export { IconStyles };
