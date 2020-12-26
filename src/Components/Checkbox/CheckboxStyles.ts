import { BorderStyles } from '../../TailwindControls/Border/BorderStyles';
import { EffectsStyle } from '../../TailwindControls/Effects/EffectsStyle';
import { FontStyles } from '../../TailwindControls/Font/FontStyles';
import { SizingStyles } from '../../TailwindControls/Sizing/SizingStyles';
import { SpacingStyles } from '../../TailwindControls/Spacing/SpacingStyles';
import { TransformStyles } from '../../TailwindControls/Transform/TransformStyles';

class CheckboxStyles {
  color?: string;
  font: FontStyles;
  border: BorderStyles;
  effects: EffectsStyle;
  spacing: SpacingStyles;
  size: SizingStyles;
  transform: TransformStyles;

  /**
   *
   */
  constructor(init?: Partial<CheckboxStyles>) {
    this.border = new BorderStyles();
    this.font = new FontStyles();
    this.effects = new EffectsStyle();
    this.spacing = new SpacingStyles();
    this.size = new SizingStyles();
    this.transform = new TransformStyles();
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
      this.transform?.toStyles(),
    ]
      .filter((x) => !!x)
      .join(' ')
      .trim();
}

export { CheckboxStyles };
