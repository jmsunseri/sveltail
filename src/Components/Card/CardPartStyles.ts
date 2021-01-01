import type { IStyle } from '../../IStyle';
import { BorderStyles } from '../../TailwindControls/Border/BorderStyles';
import type { ColorStyle } from '../../TailwindControls/Color/ColorStyle';
import { FontStyles } from '../../TailwindControls/Font/FontStyles';
import { SpacingStyles } from '../../TailwindControls/Spacing/SpacingStyles';
import type { TransformStyles } from '../../TailwindControls/Transform/TransformStyles';
import { TransitionStyles } from '../../TailwindControls/Transition/TransitionStyles';
import { getStyles } from '../../utils';
import clone from 'lodash/cloneDeep';

class CardPartStyles implements IStyle {
  font?: FontStyles;
  color?: ColorStyle[];
  border?: BorderStyles;
  spacing?: SpacingStyles;
  transform?: TransformStyles[];
  transition?: TransitionStyles;
  default: CardPartStyles;
  name: string;
  getMarkup = (): string => {
    return this.toStyles();
  };

  reset = (): CardPartStyles => {
    this.font.reset();
    this.color = this.color.slice(0, this.default.color.length);
    this.color.forEach((x) => x.reset());
    this.border.reset();
    this.spacing.reset();
    this.transform = this.transform.slice(0, this.default.transform.length);
    this.transform.forEach((x) => x.reset());
    this.transition.reset();
    return this;
  };

  /**
   *
   */
  constructor(init?: Partial<CardPartStyles>) {
    this.font = new FontStyles();
    this.border = new BorderStyles();
    this.spacing = new SpacingStyles();
    this.color = [];
    this.transform = [];
    this.transition = new TransitionStyles();
    Object.assign(this, init);
    this.default = clone<CardPartStyles>(this);
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
