import { getStyles } from '../../utils';

class SizingStyles {
  height?: string;
  maxHeight?: string;
  minHeight?: string;
  width?: string;
  maxWidth?: string;
  minWidth?: string;

  constructor(init?: Partial<SizingStyles>) {
    Object.assign(this, init);
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
