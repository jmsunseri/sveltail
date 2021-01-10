import type { IStyle } from '../../IStyle';
import type { BorderStyles } from '../../TailwindControls/Border/BorderStyles';
import type { ColorStyle } from '../../TailwindControls/Color/ColorStyle';
import { DividerStyles } from '../../TailwindControls/Divider/DividerStyles';
import type { EffectsStyle } from '../../TailwindControls/Effects/EffectsStyle';
import { FontStyles } from '../../TailwindControls/Font/FontStyles';
import { SpacingStyles } from '../../TailwindControls/Spacing/SpacingStyles';
import type { TransformStyles } from '../../TailwindControls/Transform/TransformStyles';
import { TransitionStyles } from '../../TailwindControls/Transition/TransitionStyles';
import { getStyles } from '../../utils';

class TablePartStyles implements IStyle {
  font: FontStyles;
  color?: ColorStyle[];
  border: BorderStyles[];
  effects: EffectsStyle[];
  spacing: SpacingStyles;
  divider: DividerStyles;
  transform?: TransformStyles[];
  transition?: TransitionStyles;
  getMarkup = (): string => {
    return this.toStyles();
  };

  constructor(init?: Partial<TablePartStyles>) {
    this.font = new FontStyles();
    this.border = [];
    this.effects = [];
    this.spacing = new SpacingStyles();
    this.divider = new DividerStyles();
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
      this.divider,
      this.transform,
      this.transition,
    ]);
}

export { TablePartStyles };
