import { SizingStyles } from '../../../Sizing/SizingStyles';

class IconStyles {
  color?: string;
  size?: SizingStyles;

  constructor(init?: Partial<IconStyles>) {
    this.size = new SizingStyles();
    Object.assign(this, init);
  }

  toStyles = () => `${this.color} ${this.size.toStyles()}`;
}

export { IconStyles };
