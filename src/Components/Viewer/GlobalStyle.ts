import type { IStyle } from '../../IStyle';
import { ColorStyle } from '../../TailwindControls/Color/ColorStyle';
import { FontStyles } from '../../TailwindControls/Font/FontStyles';
import { SpacingStyles } from '../../TailwindControls/Spacing/SpacingStyles';
import { TransitionStyles } from '../../TailwindControls/Transition/TransitionStyles';
import { getStyles } from '../../utils';
import clone from 'lodash/cloneDeep';

class GlobalStyle implements IStyle {
  font: FontStyles;
  color?: ColorStyle[];
  spacing: SpacingStyles;
  transition: TransitionStyles;
  default: GlobalStyle;

  reset = (): GlobalStyle => {
    this.color = this.color.slice(0, this.default.color.length);
    this.color.forEach((x) => x.reset());
    this.font.reset();
    this.spacing.reset();
    this.transition.reset();
    return this;
  };

  constructor(init?: Partial<GlobalStyle>) {
    this.font = new FontStyles();
    this.spacing = new SpacingStyles();
    this.transition = new TransitionStyles();
    this.color = [new ColorStyle()];
    Object.assign(this, init);
    this.default = clone<GlobalStyle>(this);
  }
  toStyles = () => {
    return getStyles([this.color, this.font, this.spacing, this.transition]);
  };
}

export { GlobalStyle };
