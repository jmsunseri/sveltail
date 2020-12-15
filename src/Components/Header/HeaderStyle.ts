import { BorderStyles } from '../../Border/BorderStyles';
import { EffectsStyle } from '../../Effects/EffectsStyle';
import { FontStyles } from '../../Font/FontStyles';
import { SizingStyles } from '../../Sizing/SizingStyles';
import { SpacingStyles } from '../../Spacing/SpacingStyles';

class HeaderStyle {
  font: FontStyles;
  color?: string;
  size: SizingStyles;
  border: BorderStyles;
  effects: EffectsStyle;
  spacing: SpacingStyles;

  /**
   *
   */
  constructor(init?: Partial<HeaderStyle>) {
    this.font = new FontStyles();
    this.border = new BorderStyles();
    this.size = new SizingStyles();
    this.effects = new EffectsStyle();
    this.spacing = new SpacingStyles();
    Object.assign(this, init);
  }

  toStyles = () =>
    `${
      this.color
    } ${this.font.toStyles()} ${this.border.toStyles()} ${this.effects.toStyles()} ${this.spacing.toStyles()}  ${this.size.toStyles()}`;
}

export { HeaderStyle };
