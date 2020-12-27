import { ColorStyle } from '../../TailwindControls/Color/ColorStyle';
import { FontStyles } from '../../TailwindControls/Font/FontStyles';
import { SpacingStyles } from '../../TailwindControls/Spacing/SpacingStyles';
import { TransformStyles } from '../../TailwindControls/Transform/TransformStyles';
import { TransitionStyles } from '../../TailwindControls/Transition/TransitionStyles';

class SelectOptionStyles {
  font?: FontStyles;
  spacing?: SpacingStyles;
  color?: ColorStyle[];
  transform?: TransformStyles;
  transition?: TransitionStyles;

  /**
   *
   */
  constructor(init?: Partial<SelectOptionStyles>) {
    this.font = new FontStyles();
    this.spacing = new SpacingStyles();
    this.transform = new TransformStyles();
    this.color = [new ColorStyle()];
    this.transition = new TransitionStyles();
    Object.assign(this, init);
  }

  toStyles = () =>
    [
      this.font?.toStyles(),
      this.spacing?.toStyles(),
      this.color
        ?.map((x) => x.toStyles())
        .join(' ')
        .trim(),
      this.transform?.toStyles(),
      this.transition?.toStyles(),
    ]
      .filter((x) => !!x)
      .join(' ')
      .trim();
}

export { SelectOptionStyles };
