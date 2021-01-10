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

class CheckboxStyles implements IStyle {
  color?: ColorStyle[];
  font: FontStyles;
  border: BorderStyles[];
  effects: EffectsStyle[];
  spacing: SpacingStyles;
  size: SizingStyles;
  transform: TransformStyles[];
  transition: TransitionStyles;
  getMarkup = (): string => {
    return `<span class="${this.toStyles()} cursor-pointer flex flex-row items-center justify-center">
    ✓
</span>`;
  };

  constructor(init?: Partial<CheckboxStyles>) {
    this.border = [];
    this.font = new FontStyles();
    this.effects = [];
    this.spacing = new SpacingStyles();
    this.size = new SizingStyles();
    this.transform = [];
    this.color = [];
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
