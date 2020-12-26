import { BorderStyles } from '../../TailwindControls/Border/BorderStyles';
import { FontStyles } from '../../TailwindControls/Font/FontStyles';
import { RingStyles } from '../../TailwindControls/Ring/RingStyles';
import { SpacingStyles } from '../../TailwindControls/Spacing/SpacingStyles';
import { TransformStyles } from '../../TailwindControls/Transform/TransformStyles';
import { IconStyles } from '../Button/Models/IconStyles';

class TextFieldStyles {
  font: FontStyles;
  color?: string;
  icon: IconStyles;
  border: BorderStyles;
  spacing: SpacingStyles;
  ring: RingStyles;
  transform: TransformStyles;

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
    Object.assign(this, init);
  }

  toStyles = () =>
    [
      this.color,
      this.font.toStyles(),
      this.border.toStyles(),
      this.spacing.toStyles(),
      this.ring.toStyles(),
      this.transform.toStyles(),
    ].join(' ');
}

export { TextFieldStyles };
