import { BorderStyles } from '../../TailwindControls/Border/BorderStyles';
import { ColorStyle } from '../../TailwindControls/Color/ColorStyle';
import { EffectsStyle } from '../../TailwindControls/Effects/EffectsStyle';
import { FontStyles } from '../../TailwindControls/Font/FontStyles';
import { SizingStyles } from '../../TailwindControls/Sizing/SizingStyles';
import { SpacingStyles } from '../../TailwindControls/Spacing/SpacingStyles';
import { TransformStyles } from '../../TailwindControls/Transform/TransformStyles';
import { TransitionStyles } from '../../TailwindControls/Transition/TransitionStyles';

class HeaderStyle {
  font: FontStyles;
  color?: ColorStyle[];
  size: SizingStyles;
  border: BorderStyles;
  effects: EffectsStyle[];
  spacing: SpacingStyles;
  transform: TransformStyles;
  transition: TransitionStyles;

  /**
   *
   */
  constructor(init?: Partial<HeaderStyle>) {
    this.font = new FontStyles();
    this.border = new BorderStyles();
    this.size = new SizingStyles();
    this.effects = [new EffectsStyle()];
    this.spacing = new SpacingStyles();
    this.transform = new TransformStyles();
    this.color = [new ColorStyle()];
    this.transition = new TransitionStyles();
    Object.assign(this, init);
  }

  toStyles = () =>
    [
      this.color
        ?.map((x) => x.toStyles())
        .join(' ')
        .trim(),
      this.font.toStyles(),
      this.border.toStyles(),
      this.effects
        .map((x) => x.toStyles())
        .join(' ')
        .trim(),
      this.spacing.toStyles(),
      this.size.toStyles(),
      this.transform.toStyles(),
      this.transition.toStyles(),
    ]
      .filter((x) => !!x)
      .join(' ')
      .trim();
}

export { HeaderStyle };
