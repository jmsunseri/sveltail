import { FontStyles } from '../../TailwindControls/Font/FontStyles';
import { SpacingStyles } from '../../TailwindControls/Spacing/SpacingStyles';
import { TransformStyles } from '../../TailwindControls/Transform/TransformStyles';

class SelectOptionStyles {
  font?: FontStyles;
  spacing?: SpacingStyles;
  color?: string;
  transform?: TransformStyles;

  /**
   *
   */
  constructor(init?: Partial<SelectOptionStyles>) {
    this.font = new FontStyles();
    this.spacing = new SpacingStyles();
    this.transform = new TransformStyles();
    Object.assign(this, init);
  }

  toStyles = () =>
    [
      this.font?.toStyles(),
      this.spacing?.toStyles(),
      this.color,
      this.transform?.toStyles(),
    ]
      .filter((x) => !!x)
      .join(' ')
      .trim();
}

export { SelectOptionStyles };
