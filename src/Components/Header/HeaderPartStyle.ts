import type { IStyle } from '../../IStyle';
import { BorderStyles } from '../../TailwindControls/Border/BorderStyles';
import type { ColorStyle } from '../../TailwindControls/Color/ColorStyle';
import type { EffectsStyle } from '../../TailwindControls/Effects/EffectsStyle';
import { FontStyles } from '../../TailwindControls/Font/FontStyles';
import { SizingStyles } from '../../TailwindControls/Sizing/SizingStyles';
import { SpacingStyles } from '../../TailwindControls/Spacing/SpacingStyles';
import type { TransformStyles } from '../../TailwindControls/Transform/TransformStyles';
import { TransitionStyles } from '../../TailwindControls/Transition/TransitionStyles';
import { getStyles } from '../../utils';
import clone from 'lodash/cloneDeep';

class HeaderPartStyle implements IStyle {
  font: FontStyles;
  color?: ColorStyle[];
  size: SizingStyles;
  border: BorderStyles;
  effects: EffectsStyle[];
  spacing: SpacingStyles;
  transform: TransformStyles[];
  transition: TransitionStyles;
  default: HeaderPartStyle;
  name: string;
  getMarkup = (): string => {
    return this.toStyles();
  };

  reset = (): HeaderPartStyle => {
    this.font.reset();
    this.color = this.color.slice(0, this.default.color.length);
    this.color.forEach((x) => x.reset());
    this.size.reset();
    this.border.reset();
    this.effects = this.effects.slice(0, this.default.effects.length);
    this.effects.forEach((x) => x.reset());
    this.spacing.reset();
    this.transform = this.transform.slice(0, this.default.transform.length);
    this.transform.forEach((x) => x.reset());
    this.transition.reset();
    return this;
  };

  /**
   *
   */
  constructor(init?: Partial<HeaderPartStyle>) {
    this.font = new FontStyles();
    this.border = new BorderStyles();
    this.size = new SizingStyles();
    this.effects = [];
    this.spacing = new SpacingStyles();
    this.transform = [];
    this.color = [];
    this.transition = new TransitionStyles();

    Object.assign(this, init);
    this.default = clone<HeaderPartStyle>(this);
  }

  toStyles = () =>
    getStyles([
      this.color,
      this.font,
      this.border,
      this.effects,
      this.spacing,
      this.size,
      this.transform,
      this.transition,
    ]);
}

export { HeaderPartStyle };
