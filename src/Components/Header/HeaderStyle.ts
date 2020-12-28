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

class HeaderStyle implements IStyle {
  font: FontStyles;
  color?: ColorStyle[];
  size: SizingStyles;
  border: BorderStyles;
  effects: EffectsStyle[];
  spacing: SpacingStyles;
  transform: TransformStyles[];
  transition: TransitionStyles;

  /**
   *
   */
  constructor(init?: Partial<HeaderStyle>) {
    this.font = new FontStyles();
    this.border = new BorderStyles();
    this.size = new SizingStyles();
    this.effects = [new EffectsStyle()];
    this.spacing = new SpacingStyles();
    this.transform = [new TransformStyles()];
    this.color = [new ColorStyle()];
    this.transition = new TransitionStyles();
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
      this.transform,
      this.transition,
    ]);
}

export { HeaderStyle };
