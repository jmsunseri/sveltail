import type { IStyle } from '../../IStyle';
import type { BorderStyles } from '../../TailwindControls/Border/BorderStyles';
import type { ColorStyle } from '../../TailwindControls/Color/ColorStyle';
import type { EffectsStyle } from '../../TailwindControls/Effects/EffectsStyle';
import { FontStyles } from '../../TailwindControls/Font/FontStyles';
import { SizingStyles } from '../../TailwindControls/Sizing/SizingStyles';
import { SpacingStyles } from '../../TailwindControls/Spacing/SpacingStyles';
import type { TransformStyles } from '../../TailwindControls/Transform/TransformStyles';
import { TransitionStyles } from '../../TailwindControls/Transition/TransitionStyles';
import { getStyles } from '../../utils';

class HeaderPartStyle implements IStyle {
  font: FontStyles;
  color?: ColorStyle[];
  size: SizingStyles;
  border: BorderStyles[];
  effects: EffectsStyle[];
  spacing: SpacingStyles;
  transform: TransformStyles[];
  transition: TransitionStyles;
  getMarkup = (): string => {
    return this.toStyles();
  };

  constructor(init?: Partial<HeaderPartStyle>) {
    this.font = new FontStyles();
    this.border = [];
    this.size = new SizingStyles();
    this.effects = [];
    this.spacing = new SpacingStyles();
    this.transform = [];
    this.color = [];
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

export { HeaderPartStyle };
