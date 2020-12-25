import { BorderStyles } from '../../TailwindControls/Border/BorderStyles';
import { EffectsStyle } from '../../TailwindControls/Effects/EffectsStyle';
import { FontStyles } from '../../TailwindControls/Font/FontStyles';
import { SpacingStyles } from '../../TailwindControls/Spacing/SpacingStyles';
import { CardPartStyles } from './CardPartStyles';

class CardStyles {
  color?: string;
  border?: BorderStyles;
  effects?: EffectsStyle;
  spacing?: SpacingStyles;
  header?: CardPartStyles;
  footer?: CardPartStyles;
  container?: CardPartStyles;

  /**
   *
   */
  constructor(init?: Partial<CardStyles>) {
    this.border = new BorderStyles();
    this.effects = new EffectsStyle();
    this.spacing = new SpacingStyles();
    this.header = new CardPartStyles();
    this.footer = new CardPartStyles();
    this.container = new CardPartStyles();
    Object.assign(this, init);
  }

  toStyles = () =>
    [
      this.color,
      this.border?.toStyles(),
      this.effects?.toStyles(),
      this.spacing?.toStyles(),
    ]
      .filter((x) => !!x)
      .join(' ')
      .trim();
}

export { CardStyles };
