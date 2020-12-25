import { BorderStyles } from '../../TailwindControls/Border/BorderStyles';
import { DividerStyles } from '../../TailwindControls/Divider/DividerStyles';
import { EffectsStyle } from '../../TailwindControls/Effects/EffectsStyle';
import { FontStyles } from '../../TailwindControls/Font/FontStyles';
import { SpacingStyles } from '../../TailwindControls/Spacing/SpacingStyles';
import { TablePartStyles } from './TablePartStyles';

class TableStyles {
  font: FontStyles;
  color?: string;
  border: BorderStyles;
  effects: EffectsStyle;
  spacing: SpacingStyles;
  divider: DividerStyles;
  row: TablePartStyles;
  header: TablePartStyles;

  /**
   *
   */
  constructor(init?: Partial<TableStyles>) {
    this.font = new FontStyles();
    this.border = new BorderStyles();
    this.effects = new EffectsStyle();
    this.spacing = new SpacingStyles();
    this.divider = new DividerStyles();
    this.row = new TablePartStyles();
    this.header = new TablePartStyles();
    Object.assign(this, init);
  }

  toStyles = () =>
    [
      this.color,
      this.font?.toStyles(),
      this.border?.toStyles(),
      this.effects?.toStyles(),
      this.spacing?.toStyles(),
      this.divider?.toStyles(),
    ]
      .filter((x) => !!x)
      .join(' ')
      .trim();
}

export { TableStyles };
