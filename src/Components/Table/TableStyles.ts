import type { IStyle } from '../../IStyle';
import { BorderStyles } from '../../TailwindControls/Border/BorderStyles';
import { ColorStyle } from '../../TailwindControls/Color/ColorStyle';
import { DividerStyles } from '../../TailwindControls/Divider/DividerStyles';
import { EffectsStyle } from '../../TailwindControls/Effects/EffectsStyle';
import { FontStyles } from '../../TailwindControls/Font/FontStyles';
import { SpacingStyles } from '../../TailwindControls/Spacing/SpacingStyles';
import { TransformStyles } from '../../TailwindControls/Transform/TransformStyles';
import { TransitionStyles } from '../../TailwindControls/Transition/TransitionStyles';
import { getStyles } from '../../utils';
import { TablePartStyles } from './TablePartStyles';

class TableStyles implements IStyle {
  font: FontStyles;
  color?: ColorStyle[];
  border: BorderStyles;
  effects: EffectsStyle[];
  spacing: SpacingStyles;
  divider: DividerStyles;
  row: TablePartStyles;
  header: TablePartStyles;
  transform: TransformStyles;
  transition: TransitionStyles;

  /**
   *
   */
  constructor(init?: Partial<TableStyles>) {
    this.font = new FontStyles();
    this.border = new BorderStyles();
    this.effects = [new EffectsStyle()];
    this.spacing = new SpacingStyles();
    this.divider = new DividerStyles();
    this.row = new TablePartStyles();
    this.header = new TablePartStyles();
    this.transform = new TransformStyles();
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
      this.divider,
      this.transform,
      this.transition,
    ]);
}

export { TableStyles };
