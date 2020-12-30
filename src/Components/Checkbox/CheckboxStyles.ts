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

class CheckboxStyles implements IStyle {
  color?: ColorStyle[];
  font: FontStyles;
  border: BorderStyles;
  effects: EffectsStyle[];
  spacing: SpacingStyles;
  size: SizingStyles;
  transform: TransformStyles[];
  transition: TransitionStyles;
  default: CheckboxStyles;

  reset = (): CheckboxStyles => {
    this.color = this.color.slice(0, this.default.color.length);
    this.color.forEach((x) => x.reset());
    this.font.reset();
    this.border.reset();
    this.spacing.reset();
    this.effects = this.effects.slice(0, this.default.effects.length);
    this.effects.forEach((x) => x.reset());
    this.spacing.reset();
    this.size.reset();
    this.transform = this.transform.slice(0, this.default.transform.length);
    this.transform.forEach((x) => x.reset());
    this.transition.reset();
    return this;
  };

  /**
   *
   */
  constructor(init?: Partial<CheckboxStyles>) {
    this.border = new BorderStyles();
    this.font = new FontStyles();
    this.effects = [];
    this.spacing = new SpacingStyles();
    this.size = new SizingStyles();
    this.transform = [];
    this.color = [];
    this.transition = new TransitionStyles();
    Object.assign(this, init);
    this.default = clone(this);
  }

  toStyles = () =>
    getStyles([
      this.color,
      this.border,
      this.effects,
      this.spacing,
      this.size,
      this.font,
      this.transform,
      this.transition,
    ]);
}

export { CheckboxStyles };
