import { BorderStyles } from '../../TailwindControls/Border/BorderStyles';
import { EffectsStyle } from '../../TailwindControls/Effects/EffectsStyle';
import { FontStyles } from '../../TailwindControls/Font/FontStyles';
import { SpacingStyles } from '../../TailwindControls/Spacing/SpacingStyles';

class CardStyles {
  font?: FontStyles;
  color?: string;
  border?: BorderStyles;
  effects?: EffectsStyle;
  spacing?: SpacingStyles;

  /**
   *
   */
  constructor(init?: Partial<CardStyles>) {
    this.font = new FontStyles();
    this.border = new BorderStyles();
    this.effects = new EffectsStyle();
    this.spacing = new SpacingStyles();
    Object.assign(this, init);
  }

  toStyles = () =>
    [
      this.color,
      this.font?.toStyles(),
      this.border?.toStyles(),
      this.effects?.toStyles(),
      this.spacing?.toStyles(),
    ]
      .filter((x) => !!x)
      .join(' ')
      .trim();
}

export { CardStyles };
