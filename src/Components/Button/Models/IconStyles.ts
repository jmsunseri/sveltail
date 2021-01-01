import type { IStyle } from '../../../IStyle';
import type { ColorStyle } from '../../../TailwindControls/Color/ColorStyle';
import { SizingStyles } from '../../../TailwindControls/Sizing/SizingStyles';
import { getStyles } from '../../../utils';
import clone from 'lodash/cloneDeep';

class IconStyles implements IStyle {
  color?: ColorStyle[];
  size?: SizingStyles;
  default: IconStyles;
  name: string;
  getMarkup = (): string => {
    return this.toStyles();
  };

  reset = (): IconStyles => {
    this.color = this.color.slice(0, this.default.color.length);
    this.color.forEach((x) => x.reset());
    this.size.reset();
    return this;
  };

  constructor(init?: Partial<IconStyles>) {
    this.color = [];
    this.size = new SizingStyles();
    Object.assign(this, init);
    this.default = clone<IconStyles>(this);
  }

  toStyles = () => getStyles([this.color, this.size]);
}

export { IconStyles };
