import { FontStyles } from '../../TailwindControls/Font/FontStyles';

class GlobalStyle {
  font: FontStyles;
  color?: string;

  constructor(init?: Partial<GlobalStyle>) {
    this.font = new FontStyles();
    Object.assign(this, init);
  }
  toStyles = () => `${this.color || ''} ${this.font?.toStyles() || ''}`;
}

export { GlobalStyle };
