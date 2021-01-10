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
import { TablePartStyles } from './TablePartStyles';

class TableStyles implements IStyle {
  font: FontStyles;
  color?: ColorStyle[];
  border: BorderStyles[];
  effects: EffectsStyle[];
  spacing: SpacingStyles;
  divider: DividerStyles;
  row: TablePartStyles;
  header: TablePartStyles;
  transform: TransformStyles[];
  transition: TransitionStyles;

  getMarkup = (): string => {
    return `<div class="flex flex-col ${this.toStyles()}">
  <div
    class="flex flex-row gap-3 items-center ${this.header.toStyles()}">
    <div class="flex-1">Header 1</div>
    <div class="flex-1">Header 2</div>
  </div>
  <div
    class="flex flex-row gap-3 items-center ${this.row.toStyles()}">
    <div class="flex-1">Value 1</div>
    <div class="flex-1">Value 2</div>
  </div>
</div>`;
  };

  /**
   *
   */
  constructor(init?: Partial<TableStyles>) {
    this.font = new FontStyles();
    this.border = [];
    this.effects = [];
    this.spacing = new SpacingStyles();
    this.divider = new DividerStyles();
    this.row = new TablePartStyles();
    this.header = new TablePartStyles();
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

export { TableStyles };
