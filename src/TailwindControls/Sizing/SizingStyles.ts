import { getStyles } from '../../utils';
import clone from 'lodash/cloneDeep';

class SizingStyles {
  height?: string;
  maxHeight?: string;
  minHeight?: string;
  width?: string;
  maxWidth?: string;
  minWidth?: string;
  default: SizingStyles;

  reset = (): SizingStyles => {
    const {
      height,
      maxHeight,
      minHeight,
      width,
      maxWidth,
      minWidth,
    } = this.default;
    Object.assign(this, {
      height,
      maxHeight,
      minHeight,
      width,
      maxWidth,
      minWidth,
    });
    return this;
  };

  constructor(init?: Partial<SizingStyles>) {
    Object.assign(this, init);
    this.default = clone<SizingStyles>(this);
  }

  toStyles = () =>
    getStyles([
      this.height,
      this.maxHeight,
      this.maxWidth,
      this.width,
      this.minHeight,
      this.minWidth,
    ]);
}

export { SizingStyles };
