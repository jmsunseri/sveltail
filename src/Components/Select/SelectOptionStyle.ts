import { FontStyles } from '../../TailwindControls/Font/FontStyles';
import { SpacingStyles } from '../../TailwindControls/Spacing/SpacingStyles';

class SelectOptionStyles {
  font?: FontStyles;
  spacing?: SpacingStyles;
  color?: string;

  /**
   *
   */
  constructor(init?: Partial<SelectOptionStyles>) {
    this.font = new FontStyles();
    this.spacing = new SpacingStyles();
    Object.assign(this, init);
  }

  toStyles = () =>
    [this.font?.toStyles(), this.spacing?.toStyles(), this.color]
      .filter((x) => !!x)
      .join(' ')
      .trim();
}

export { SelectOptionStyles };
