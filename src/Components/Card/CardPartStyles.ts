import { BorderStyles } from '../../TailwindControls/Border/BorderStyles';
import { ColorStyle } from '../../TailwindControls/Color/ColorStyle';
import { FontStyles } from '../../TailwindControls/Font/FontStyles';
import { SpacingStyles } from '../../TailwindControls/Spacing/SpacingStyles';

class CardPartStyles {
  font?: FontStyles;
  color?: ColorStyle[];
  border?: BorderStyles;
  spacing?: SpacingStyles;

  /**
   *
   */
  constructor(init?: Partial<CardPartStyles>) {
    this.font = new FontStyles();
    this.border = new BorderStyles();
    this.spacing = new SpacingStyles();
    this.color = [new ColorStyle()];
    Object.assign(this, init);
  }

  toStyles = () =>
    [
      this.color
        ?.map((x) => x.toStyles())
        .join(' ')
        .trim(),
      this.font?.toStyles(),
      this.border?.toStyles(),
      this.spacing?.toStyles(),
    ]
      .filter((x) => !!x)
      .join(' ')
      .trim();
}

export { CardPartStyles };
