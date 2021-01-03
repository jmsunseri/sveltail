import type { IStyle } from '../../IStyle';
import type { ColorStyle } from '../../TailwindControls/Color/ColorStyle';
import { FontStyles } from '../../TailwindControls/Font/FontStyles';
import { SpacingStyles } from '../../TailwindControls/Spacing/SpacingStyles';
import type { TransformStyles } from '../../TailwindControls/Transform/TransformStyles';
import { TransitionStyles } from '../../TailwindControls/Transition/TransitionStyles';
import { getStyles } from '../../utils';

class SelectOptionStyles implements IStyle {
  font?: FontStyles;
  spacing?: SpacingStyles;
  color?: ColorStyle[];
  transform?: TransformStyles[];
  transition?: TransitionStyles;
  default: SelectOptionStyles;
  name: string;
  getMarkup = (): string => {
    return this.toStyles();
  };

  constructor(init?: Partial<SelectOptionStyles>) {
    this.font = new FontStyles();
    this.spacing = new SpacingStyles();
    this.transform = [];
    this.color = [];
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
