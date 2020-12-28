import { ColorStyle } from '../../TailwindControls/Color/ColorStyle';
import { FontStyles } from '../../TailwindControls/Font/FontStyles';
import { SpacingStyles } from '../../TailwindControls/Spacing/SpacingStyles';
import { TransitionStyles } from '../../TailwindControls/Transition/TransitionStyles';

class GlobalStyle {
  font: FontStyles;
  color?: ColorStyle[];
  spacing: SpacingStyles;
  transition: TransitionStyles;

  constructor(init?: Partial<GlobalStyle>) {
    this.font = new FontStyles();
    this.spacing = new SpacingStyles();
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
      this.spacing?.toStyles(),
      this.transition?.toStyles(),
    ]
      .filter((x) => !!x)
      .join(' ')
      .trim();
}

export { GlobalStyle };
