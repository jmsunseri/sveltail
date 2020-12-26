import { BorderStyles } from '../../TailwindControls/Border/BorderStyles';
import { DividerStyles } from '../../TailwindControls/Divider/DividerStyles';
import { EffectsStyle } from '../../TailwindControls/Effects/EffectsStyle';
import { FontStyles } from '../../TailwindControls/Font/FontStyles';
import { SpacingStyles } from '../../TailwindControls/Spacing/SpacingStyles';
import { TransformStyles } from '../../TailwindControls/Transform/TransformStyles';

class TablePartStyles {
  font: FontStyles;
  color?: string;
  border: BorderStyles;
  effects: EffectsStyle;
  spacing: SpacingStyles;
  divider: DividerStyles;
  hoverColor?: string;
  transform?: TransformStyles;

  /**
   *
   */
  constructor(init?: Partial<TablePartStyles>) {
    this.font = new FontStyles();
    this.border = new BorderStyles();
    this.effects = new EffectsStyle();
    this.spacing = new SpacingStyles();
    this.divider = new DividerStyles();
    this.transform = new TransformStyles();
    Object.assign(this, init);
  }

  toStyles = () =>
    [
      this.color,
      this.hoverColor,
      this.font?.toStyles(),
      this.border?.toStyles(),
      this.effects?.toStyles(),
      this.spacing?.toStyles(),
      this.divider?.toStyles(),
      this.transform?.toStyles(),
    ]
      .filter((x) => !!x)
      .join(' ')
      .trim();
}

export { TablePartStyles };
