import { FontStyles } from '../../TailwindControls/Font/FontStyles';
import type { SpacingStyles } from '../../TailwindControls/Spacing/SpacingStyles';

class GlobalStyle {
  font: FontStyles;
  color?: string;
  spacing: SpacingStyles;

  constructor(init?: Partial<GlobalStyle>) {
    this.font = new FontStyles();
    Object.assign(this, init);
  }
  toStyles = () => `${this.color || ''} ${this.font?.toStyles() || ''}`;
}

export { GlobalStyle };
