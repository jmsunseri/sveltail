import type { IStyle } from '../../../IStyle';
import { BorderStyles } from '../../../TailwindControls/Border/BorderStyles';
import { ColorStyle } from '../../../TailwindControls/Color/ColorStyle';
import { EffectsStyle } from '../../../TailwindControls/Effects/EffectsStyle';
import { FontStyles } from '../../../TailwindControls/Font/FontStyles';
import { RingStyles } from '../../../TailwindControls/Ring/RingStyles';
import { SizingStyles } from '../../../TailwindControls/Sizing/SizingStyles';
import { SpacingStyles } from '../../../TailwindControls/Spacing/SpacingStyles';
import { TransformStyles } from '../../../TailwindControls/Transform/TransformStyles';
import { TransitionStyles } from '../../../TailwindControls/Transition/TransitionStyles';
import { getStyles } from '../../../utils';
import { IconStyles } from './IconStyles';

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

  /**
   *
   */
  constructor(init?: Partial<ButtonStyles>) {
    this.font = new FontStyles();
    this.border = new BorderStyles();
    this.icon = new IconStyles();
    this.effects = [new EffectsStyle()];
    this.spacing = new SpacingStyles();
    this.size = new SizingStyles();
    this.ring = new RingStyles();
    this.transform = [new TransformStyles()];
    this.transition = new TransitionStyles();
    this.color = [new ColorStyle()];
    Object.assign(this, init);
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
