import { BorderStyles } from '../../TailwindControls/Border/BorderStyles';
import { FontStyles } from '../../TailwindControls/Font/FontStyles';
import { SpacingStyles } from '../../TailwindControls/Spacing/SpacingStyles';

class CardPartStyles {
  font?: FontStyles;
  color?: string;
  border?: BorderStyles;
  spacing?: SpacingStyles;

  /**
   *
   */
  constructor(init?: Partial<CardPartStyles>) {
    this.font = new FontStyles();
    this.border = new BorderStyles();
    this.spacing = new SpacingStyles();
    Object.assign(this, init);
  }

  toStyles = () =>
    [
      this.color,
      this.font?.toStyles(),
      this.border?.toStyles(),
      this.spacing?.toStyles(),
    ]
      .filter((x) => !!x)
      .join(' ')
      .trim();
}

export { CardPartStyles };
