import { BorderStyles } from '../../../TailwindControls/Border/BorderStyles';
import { ColorStyle } from '../../../TailwindControls/Color/ColorStyle';
import { EffectsStyle } from '../../../TailwindControls/Effects/EffectsStyle';
import { FontStyles } from '../../../TailwindControls/Font/FontStyles';
import { RingStyles } from '../../../TailwindControls/Ring/RingStyles';
import { SizingStyles } from '../../../TailwindControls/Sizing/SizingStyles';
import { SpacingStyles } from '../../../TailwindControls/Spacing/SpacingStyles';
import { TransformStyles } from '../../../TailwindControls/Transform/TransformStyles';
import { TransitionStyles } from '../../../TailwindControls/Transition/TransitionStyles';
import { IconStyles } from './IconStyles';

class ButtonStyles {
  font: FontStyles;
  color?: ColorStyle[];
  icon: IconStyles;
  border: BorderStyles;
  effects: EffectsStyle[];
  spacing: SpacingStyles;
  size: SizingStyles;
  ring: RingStyles;
  transform: TransformStyles;
  transition: TransitionStyles;

  /**
   *
   */
  constructor(init?: Partial<ButtonStyles>) {
    this.font = new FontStyles();
    this.border = new BorderStyles();
    this.icon = new IconStyles();
    this.effects = [new EffectsStyle()];
    this.spacing = new SpacingStyles();
    this.size = new SizingStyles();
    this.ring = new RingStyles();
    this.transform = new TransformStyles();
    this.transition = new TransitionStyles();
    this.color = [new ColorStyle()];
    Object.assign(this, init);
  }

  toStyles = () =>
    [
      this.color
        ?.map((x) => x.toStyles())
        .join(' ')
        .trim(),
      this.font?.toStyles(),
      this.border?.toStyles(),
      this.effects
        ?.map((x) => x.toStyles())
        .join(' ')
        .trim(),
      this.spacing?.toStyles(),
      this.size?.toStyles(),
      this.ring?.toStyles(),
      this.transform?.toStyles(),
      this.transition?.toStyles(),
    ]
      .filter((x) => !!x)
      .join(' ')
      .trim();
}

export { ButtonStyles };
