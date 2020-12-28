import type { IStyle } from '../../IStyle';
import { BorderStyles } from '../../TailwindControls/Border/BorderStyles';
import { ColorStyle } from '../../TailwindControls/Color/ColorStyle';
import { EffectsStyle } from '../../TailwindControls/Effects/EffectsStyle';
import { FontStyles } from '../../TailwindControls/Font/FontStyles';
import { SizingStyles } from '../../TailwindControls/Sizing/SizingStyles';
import { SpacingStyles } from '../../TailwindControls/Spacing/SpacingStyles';
import { TransformStyles } from '../../TailwindControls/Transform/TransformStyles';
import { TransitionStyles } from '../../TailwindControls/Transition/TransitionStyles';
import { getStyles } from '../../utils';

class CheckboxStyles implements IStyle {
  color?: ColorStyle[];
  font: FontStyles;
  border: BorderStyles;
  effects: EffectsStyle[];
  spacing: SpacingStyles;
  size: SizingStyles;
  transform: TransformStyles[];
  transition: TransitionStyles;

  /**
   *
   */
  constructor(init?: Partial<CheckboxStyles>) {
    this.border = new BorderStyles();
    this.font = new FontStyles();
    this.effects = [new EffectsStyle()];
    this.spacing = new SpacingStyles();
    this.size = new SizingStyles();
    this.transform = [new TransformStyles()];
    this.color = [new ColorStyle()];
    this.transition = new TransitionStyles();
    Object.assign(this, init);
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
