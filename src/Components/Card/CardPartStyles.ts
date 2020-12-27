import { BorderStyles } from '../../TailwindControls/Border/BorderStyles';
import { ColorStyle } from '../../TailwindControls/Color/ColorStyle';
import { FontStyles } from '../../TailwindControls/Font/FontStyles';
import { SpacingStyles } from '../../TailwindControls/Spacing/SpacingStyles';
import { TransformStyles } from '../../TailwindControls/Transform/TransformStyles';
import { TransitionStyles } from '../../TailwindControls/Transition/TransitionStyles';

class CardPartStyles {
  font?: FontStyles;
  color?: ColorStyle[];
  border?: BorderStyles;
  spacing?: SpacingStyles;
  transform?: TransformStyles;
  transition?: TransitionStyles;

  /**
   *
   */
  constructor(init?: Partial<CardPartStyles>) {
    this.font = new FontStyles();
    this.border = new BorderStyles();
    this.spacing = new SpacingStyles();
    this.color = [new ColorStyle()];
    this.transform = new TransformStyles();
    this.transition = new TransitionStyles();
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
      this.transform?.toStyles(),
      this.transition?.toStyles(),
    ]
      .filter((x) => !!x)
      .join(' ')
      .trim();
}

export { CardPartStyles };
