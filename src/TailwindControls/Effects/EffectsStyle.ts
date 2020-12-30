import type { IStyle } from '../../IStyle';
import clone from 'lodash/cloneDeep';

class EffectsStyle implements IStyle {
  boxShadow: string;
  opacity: string;
  isHover: boolean;
  default: EffectsStyle;

  reset = (): EffectsStyle => {
    const { boxShadow, opacity, isHover } = this.default;
    Object.assign(this, { boxShadow, opacity, isHover });
    return this;
  };

  constructor(init?: Partial<EffectsStyle>) {
    Object.assign(this, init);
    this.default = clone<EffectsStyle>(this);
  }

  toStyles = () =>
    [this.boxShadow, this.opacity]
      .filter((x) => !!x)
      .map((x) => (this.isHover ? `hover:${x}` : x))
      .join(' ')
      .trim();
}

export { EffectsStyle };
