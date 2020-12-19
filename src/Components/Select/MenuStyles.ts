import { BorderStyles } from '../../TailwindControls/Border/BorderStyles';
import { EffectsStyle } from '../../TailwindControls/Effects/EffectsStyle';
import { FontStyles } from '../../TailwindControls/Font/FontStyles';
import { SizingStyles } from '../../TailwindControls/Sizing/SizingStyles';
import { SpacingStyles } from '../../TailwindControls/Spacing/SpacingStyles';

class MenuStyles {
  font: FontStyles;
  color?: string;
  size: SizingStyles;
  border: BorderStyles;
  effects: EffectsStyle;
  spacing: SpacingStyles;

  /**
   *
   */
  constructor(init?: Partial<MenuStyles>) {
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

export { MenuStyles };
