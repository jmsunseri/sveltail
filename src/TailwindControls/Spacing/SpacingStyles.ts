import type { IStyle } from '../../IStyle';
import clone from 'lodash/cloneDeep';

interface ISpacing {
  spacing: string;
  size: string;
}

class SpacingStyles implements IStyle {
  padding?: ISpacing[] = [];
  margin?: ISpacing[] = [];
  default: SpacingStyles;

  reset = (): SpacingStyles => {
    return clone<SpacingStyles>(this.default);
  };

  constructor(init?: Partial<SpacingStyles>) {
    Object.assign(this, init);
    this.default = clone<SpacingStyles>(this);
  }

  toStyles = () =>
    `${
      this.padding?.map((s: ISpacing) => `${s.spacing}-${s.size}`).join(' ') ||
      ''
    } ${
      this.margin?.map((s: ISpacing) => `${s.spacing}-${s.size}`).join(' ') ||
      ''
    }`.trim();
}

export { SpacingStyles };
