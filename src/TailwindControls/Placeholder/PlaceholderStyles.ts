import type { ColorStyle } from '../Color/ColorStyle';
import type { IStyle } from '../../IStyle';
import { getStyles } from '../../utils';

class PlaceholderStyles implements IStyle {
  color: ColorStyle[];
  opacity: string;

  constructor(init?: Partial<PlaceholderStyles>) {
    this.color = [];
    Object.assign(this, init);
  }

  toStyles = () => getStyles([this.color, this.opacity]);
}

export { PlaceholderStyles };
