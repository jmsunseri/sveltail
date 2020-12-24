import { BorderStyles } from '../../TailwindControls/Border/BorderStyles';
import { EffectsStyle } from '../../TailwindControls/Effects/EffectsStyle';
import { FontStyles } from '../../TailwindControls/Font/FontStyles';
import { RingStyles } from '../../TailwindControls/Ring/RingStyles';
import { SizingStyles } from '../../TailwindControls/Sizing/SizingStyles';
import { SpacingStyles } from '../../TailwindControls/Spacing/SpacingStyles';

class CheckboxStyles {
  color?: string;
  font: FontStyles;
  border: BorderStyles;
  effects: EffectsStyle;
  spacing: SpacingStyles;
  size: SizingStyles;

  /**
   *
   */
  constructor(init?: Partial<CheckboxStyles>) {
    this.border = new BorderStyles();
    this.font = new FontStyles();
    this.effects = new EffectsStyle();
    this.spacing = new SpacingStyles();
    this.size = new SizingStyles();
    Object.assign(this, init);
  }

  toStyles = () =>
    [
      this.color,
      this.border?.toStyles(),
      this.effects?.toStyles(),
      this.spacing?.toStyles(),
      this.size?.toStyles(),
      this.font?.toStyles(),
    ]
      .filter((x) => !!x)
      .join(' ')
      .trim();
}

export { CheckboxStyles };
