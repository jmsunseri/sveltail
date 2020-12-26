import { ColorStyle } from '../../TailwindControls/Color/ColorStyle';
import { FontStyles } from '../../TailwindControls/Font/FontStyles';
import { SpacingStyles } from '../../TailwindControls/Spacing/SpacingStyles';
import { TransformStyles } from '../../TailwindControls/Transform/TransformStyles';

class SelectOptionStyles {
  font?: FontStyles;
  spacing?: SpacingStyles;
  color?: ColorStyle[];
  transform?: TransformStyles;

  /**
   *
   */
  constructor(init?: Partial<SelectOptionStyles>) {
    this.font = new FontStyles();
    this.spacing = new SpacingStyles();
    this.transform = new TransformStyles();
    this.color = [new ColorStyle()];
    Object.assign(this, init);
  }

  toStyles = () =>
    [
      this.font?.toStyles(),
      this.spacing?.toStyles(),
      this.color
        ?.map((x) => x.toStyles())
        .join(' ')
        .trim(),
      this.transform?.toStyles(),
    ]
      .filter((x) => !!x)
      .join(' ')
      .trim();
}

export { SelectOptionStyles };
