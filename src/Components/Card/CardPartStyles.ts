import type { IStyle } from '../../IStyle';
import { BorderStyles } from '../../TailwindControls/Border/BorderStyles';
import { ColorStyle } from '../../TailwindControls/Color/ColorStyle';
import { FontStyles } from '../../TailwindControls/Font/FontStyles';
import { SpacingStyles } from '../../TailwindControls/Spacing/SpacingStyles';
import { TransformStyles } from '../../TailwindControls/Transform/TransformStyles';
import { TransitionStyles } from '../../TailwindControls/Transition/TransitionStyles';
import { getStyles } from '../../utils';

class CardPartStyles implements IStyle {
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
    getStyles([
      this.color,
      this.font,
      this.border,
      this.spacing,
      this.transform,
      this.transition,
    ]);
}

export { CardPartStyles };
