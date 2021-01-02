import type { IStyle } from '../../../IStyle';
import type { ColorStyle } from '../../../TailwindControls/Color/ColorStyle';
import { getStyles } from '../../../utils';
import clone from 'lodash/cloneDeep';

class IconStyles implements IStyle {
  color?: ColorStyle[];
  size?: number;
  stroke?: number;
  default: IconStyles;
  name: string;
  getMarkup = (): string => {
    return this.toStyles();
  };

  reset = (): IconStyles => {
    this.color = this.color.slice(0, this.default.color.length);
    this.color.forEach((x) => x.reset());
    this.size = this.default.size;
    this.stroke = this.default.stroke;
    return this;
  };

  constructor(init?: Partial<IconStyles>) {
    this.color = [];
    this.size = 24;
    this.stroke = 3;
    Object.assign(this, init);
    this.default = clone<IconStyles>(this);
  }

  toStyles = () => getStyles([this.color]);
}

export { IconStyles };
