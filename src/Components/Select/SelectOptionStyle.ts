import type { IStyle } from '../../IStyle';
import { ColorStyle } from '../../TailwindControls/Color/ColorStyle';
import { FontStyles } from '../../TailwindControls/Font/FontStyles';
import { SpacingStyles } from '../../TailwindControls/Spacing/SpacingStyles';
import { TransformStyles } from '../../TailwindControls/Transform/TransformStyles';
import { TransitionStyles } from '../../TailwindControls/Transition/TransitionStyles';
import { getStyles } from '../../utils';

class SelectOptionStyles implements IStyle {
  font?: FontStyles;
  spacing?: SpacingStyles;
  color?: ColorStyle[];
  transform?: TransformStyles[];
  transition?: TransitionStyles;

  /**
   *
   */
  constructor(init?: Partial<SelectOptionStyles>) {
    this.font = new FontStyles();
    this.spacing = new SpacingStyles();
    this.transform = [new TransformStyles()];
    this.color = [new ColorStyle()];
    this.transition = new TransitionStyles();
    Object.assign(this, init);
  }

  toStyles = () =>
    getStyles([
      this.font,
      this.spacing,
      this.color,
      this.transform,
      this.transition,
    ]);
}

export { SelectOptionStyles };
