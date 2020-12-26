import { BorderStyles } from '../../../TailwindControls/Border/BorderStyles';
import { EffectsStyle } from '../../../TailwindControls/Effects/EffectsStyle';
import { FontStyles } from '../../../TailwindControls/Font/FontStyles';
import { RingStyles } from '../../../TailwindControls/Ring/RingStyles';
import { SizingStyles } from '../../../TailwindControls/Sizing/SizingStyles';
import { SpacingStyles } from '../../../TailwindControls/Spacing/SpacingStyles';
import { TransformStyles } from '../../../TailwindControls/Transform/TransformStyles';
import { IconStyles } from './IconStyles';

class ButtonStyles {
  font: FontStyles;
  color?: string;
  icon: IconStyles;
  border: BorderStyles;
  effects: EffectsStyle;
  spacing: SpacingStyles;
  size: SizingStyles;
  ring: RingStyles;
  transform: TransformStyles;

  /**
   *
   */
  constructor(init?: Partial<ButtonStyles>) {
    this.font = new FontStyles();
    this.border = new BorderStyles();
    this.icon = new IconStyles();
    this.effects = new EffectsStyle();
    this.spacing = new SpacingStyles();
    this.size = new SizingStyles();
    this.ring = new RingStyles();
    this.transform = new TransformStyles();
    Object.assign(this, init);
  }

  toStyles = () =>
    [
      this.color,
      this.font?.toStyles(),
      this.border?.toStyles(),
      this.effects?.toStyles(),
      this.spacing?.toStyles(),
      this.size?.toStyles(),
      this.ring?.toStyles(),
      this.transform?.toStyles(),
    ]
      .filter((x) => !!x)
      .join(' ')
      .trim();
}

export { ButtonStyles };
