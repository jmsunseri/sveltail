import type { IStyle } from '../../IStyle';
import type { ColorStyle } from '../../TailwindControls/Color/ColorStyle';
import { FontStyles } from '../../TailwindControls/Font/FontStyles';
import { SpacingStyles } from '../../TailwindControls/Spacing/SpacingStyles';
import type { TransformStyles } from '../../TailwindControls/Transform/TransformStyles';
import { TransitionStyles } from '../../TailwindControls/Transition/TransitionStyles';
import { getStyles } from '../../utils';
import clone from 'lodash/cloneDeep';

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

  reset = (): SelectOptionStyles => {
    this.font.reset();
    this.color = this.color.slice(0, this.default.color.length);
    this.color.forEach((x) => x.reset());
    this.spacing.reset();
    this.transform = this.transform.slice(0, this.default.transform.length);
    this.transform.forEach((x) => x.reset());
    this.transition.reset();
    return this;
  };

  /**
   *
   */
  constructor(init?: Partial<SelectOptionStyles>) {
    this.font = new FontStyles();
    this.spacing = new SpacingStyles();
    this.transform = [];
    this.color = [];
    this.transition = new TransitionStyles();
    Object.assign(this, init);
    this.default = clone<SelectOptionStyles>(this);
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
