import type { IStyle } from '../../IStyle';
import { ColorStyle } from '../../TailwindControls/Color/ColorStyle';
import { FontStyles } from '../../TailwindControls/Font/FontStyles';
import { SpacingStyles } from '../../TailwindControls/Spacing/SpacingStyles';
import { TransitionStyles } from '../../TailwindControls/Transition/TransitionStyles';
import { getStyles } from '../../utils';

class GlobalStyle implements IStyle {
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
    getStyles([this.color, this.font, this.spacing, this.transition]);
}

export { GlobalStyle };
