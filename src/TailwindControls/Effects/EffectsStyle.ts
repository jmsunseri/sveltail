import type { IStyle } from '../../IStyle';

class EffectsStyle implements IStyle {
  boxShadow: string;
  opacity: string;
  isHover: boolean;

  constructor(init?: Partial<EffectsStyle>) {
    Object.assign(this, init);
  }

  toStyles = () =>
    [this.boxShadow, this.opacity]
      .filter((x) => !!x)
      .map((x) => (this.isHover ? `hover:${x}` : x))
      .join(' ')
      .trim();
}

export { EffectsStyle };
