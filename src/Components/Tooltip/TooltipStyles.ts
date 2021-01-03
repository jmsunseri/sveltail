import type { IStyle } from '../../IStyle';
import { BorderStyles } from '../../TailwindControls/Border/BorderStyles';
import type { ColorStyle } from '../../TailwindControls/Color/ColorStyle';
import type { EffectsStyle } from '../../TailwindControls/Effects/EffectsStyle';
import { FontStyles } from '../../TailwindControls/Font/FontStyles';
import { SpacingStyles } from '../../TailwindControls/Spacing/SpacingStyles';
import type { TransformStyles } from '../../TailwindControls/Transform/TransformStyles';
import { getStyles } from '../../utils';

class TooltipStyles implements IStyle {
  font: FontStyles;
  color?: ColorStyle[];
  border: BorderStyles;
  effects: EffectsStyle[];
  spacing: SpacingStyles;
  transform: TransformStyles[];
  getMarkup = (): string => {
    return `<div class="absolute z-10 ${getStyles(this.transform)}">
  <div class="${getStyles([
    this.spacing,
    this.effects,
    this.font,
    this.border,
    this.color,
  ])}">
    Tooltip Text
  </div>
</div>`;
  };

  constructor(init?: Partial<TooltipStyles>) {
    this.font = new FontStyles();
    this.border = new BorderStyles();
    this.effects = [];
    this.spacing = new SpacingStyles();
    this.transform = [];
    this.color = [];
    Object.assign(this, init);
  }

  toStyles = () =>
    getStyles([
      this.color,
      this.font,
      this.border,
      this.effects,
      this.spacing,
      this.transform,
    ]);
}

export { TooltipStyles };
