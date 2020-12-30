import type { IStyle } from '../../../IStyle';
import { BorderStyles } from '../../../TailwindControls/Border/BorderStyles';
import type { ColorStyle } from '../../../TailwindControls/Color/ColorStyle';
import type { EffectsStyle } from '../../../TailwindControls/Effects/EffectsStyle';
import { FontStyles } from '../../../TailwindControls/Font/FontStyles';
import { RingStyles } from '../../../TailwindControls/Ring/RingStyles';
import { SizingStyles } from '../../../TailwindControls/Sizing/SizingStyles';
import { SpacingStyles } from '../../../TailwindControls/Spacing/SpacingStyles';
import type { TransformStyles } from '../../../TailwindControls/Transform/TransformStyles';
import { TransitionStyles } from '../../../TailwindControls/Transition/TransitionStyles';
import { getStyles } from '../../../utils';
import { IconStyles } from './IconStyles';
import clone from 'lodash/cloneDeep';

class ButtonStyles implements IStyle {
  font: FontStyles;
  color?: ColorStyle[];
  icon: IconStyles;
  border: BorderStyles;
  effects: EffectsStyle[];
  spacing: SpacingStyles;
  size: SizingStyles;
  ring: RingStyles;
  transform: TransformStyles[];
  transition: TransitionStyles;
  default: ButtonStyles;

  reset = (): ButtonStyles => {
    this.font.reset();
    this.color = this.color.slice(0, this.default.color.length);
    this.color.forEach((x) => x.reset());
    this.effects = this.effects.slice(0, this.default.effects.length);
    this.effects.forEach((x) => x.reset());
    this.icon.reset();
    this.border.reset();
    this.spacing.reset();
    this.size.reset();
    this.ring.reset();
    this.transform = this.transform.slice(0, this.default.transform.length);
    this.transform.forEach((x) => x.reset());
    this.transition.reset();
    return this;
  };

  /**
   *
   */
  constructor(init?: Partial<ButtonStyles>) {
    this.font = new FontStyles();
    this.border = new BorderStyles();
    this.icon = new IconStyles();
    this.effects = [];
    this.spacing = new SpacingStyles();
    this.size = new SizingStyles();
    this.ring = new RingStyles();
    this.transform = [];
    this.transition = new TransitionStyles();
    this.color = [];

    Object.assign(this, init);
    this.default = clone<ButtonStyles>(this);
  }

  toStyles = () =>
    getStyles([
      this.color,
      this.font,
      this.border,
      this.effects,
      this.spacing,
      this.size,
      this.ring,
      this.transform,
      this.transition,
    ]);
}

export { ButtonStyles };
