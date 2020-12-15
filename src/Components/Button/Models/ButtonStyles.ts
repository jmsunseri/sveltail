import { BorderStyles } from '../../../Border/BorderStyles';
import { EffectsStyle } from '../../../Effects/EffectsStyle';
import { FontStyles } from '../../../Font/FontStyles';
import { SpacingStyles } from '../../../Spacing/SpacingStyles';
import { IconStyles } from './IconStyles';

class ButtonStyles {
  font: FontStyles;
  color?: string;
  icon: IconStyles;
  border: BorderStyles;
  effects: EffectsStyle;
  spacing: SpacingStyles;

  /**
   *
   */
  constructor(init?: Partial<ButtonStyles>) {
    this.font = new FontStyles();
    this.border = new BorderStyles();
    this.icon = new IconStyles();
    this.effects = new EffectsStyle();
    this.spacing = new SpacingStyles();
    Object.assign(this, init);
  }

  toStyles = () =>
    `${
      this.color
    } ${this.font.toStyles()} ${this.border.toStyles()} ${this.effects.toStyles()} ${this.spacing.toStyles()}`;
}

export { ButtonStyles };
