import { BorderStyles } from '../../TailwindControls/Border/BorderStyles';
import { ColorStyle } from '../../TailwindControls/Color/ColorStyle';
import { FontStyles } from '../../TailwindControls/Font/FontStyles';
import { PlaceholderStyles } from '../../TailwindControls/Placeholder/PlaceholderStyles';
import { RingStyles } from '../../TailwindControls/Ring/RingStyles';
import { SpacingStyles } from '../../TailwindControls/Spacing/SpacingStyles';
import { TransformStyles } from '../../TailwindControls/Transform/TransformStyles';
import { TransitionStyles } from '../../TailwindControls/Transition/TransitionStyles';
import { IconStyles } from '../Button/Models/IconStyles';

class TextFieldStyles {
  font: FontStyles;
  color?: ColorStyle[];
  icon: IconStyles;
  border: BorderStyles;
  spacing: SpacingStyles;
  ring: RingStyles;
  transform: TransformStyles;
  transition: TransitionStyles;
  placeholder: PlaceholderStyles;

  /**
   *
   */
  constructor(init?: Partial<TextFieldStyles>) {
    this.font = new FontStyles();
    this.border = new BorderStyles();
    this.icon = new IconStyles();
    this.spacing = new SpacingStyles();
    this.ring = new RingStyles();
    this.transform = new TransformStyles();
    this.color = [new ColorStyle()];
    this.transition = new TransitionStyles();
    this.placeholder = new PlaceholderStyles();
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
      this.spacing.toStyles(),
      this.ring.toStyles(),
      this.transform.toStyles(),
      this.transition.toStyles(),
      this.placeholder.toStyles(),
    ]
      .filter((x) => !!x)
      .join(' ')
      .trim();
}

export { TextFieldStyles };
