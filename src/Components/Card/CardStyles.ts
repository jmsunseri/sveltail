import { BorderStyles } from '../../TailwindControls/Border/BorderStyles';
import { ColorStyle } from '../../TailwindControls/Color/ColorStyle';
import { EffectsStyle } from '../../TailwindControls/Effects/EffectsStyle';
import { SpacingStyles } from '../../TailwindControls/Spacing/SpacingStyles';
import { TransformStyles } from '../../TailwindControls/Transform/TransformStyles';
import { TransitionStyles } from '../../TailwindControls/Transition/TransitionStyles';
import { CardPartStyles } from './CardPartStyles';

class CardStyles {
  color?: ColorStyle[];
  border?: BorderStyles;
  effects?: EffectsStyle[];
  spacing?: SpacingStyles;
  header?: CardPartStyles;
  footer?: CardPartStyles;
  container?: CardPartStyles;
  transform?: TransformStyles;
  transition?: TransitionStyles;

  /**
   *
   */
  constructor(init?: Partial<CardStyles>) {
    this.border = new BorderStyles();
    this.effects = [new EffectsStyle()];
    this.spacing = new SpacingStyles();
    this.header = new CardPartStyles();
    this.footer = new CardPartStyles();
    this.container = new CardPartStyles();
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
      this.border?.toStyles(),
      this.effects
        ?.map((x) => x.toStyles())
        .join(' ')
        .trim(),
      this.spacing?.toStyles(),
      this.transform?.toStyles(),
      this.transition?.toStyles(),
    ]
      .filter((x) => !!x)
      .join(' ')
      .trim();
}

export { CardStyles };
