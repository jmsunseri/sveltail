import type { IStyle } from '../../IStyle';
import { ColorStyle } from '../../TailwindControls/Color/ColorStyle';
import { FontStyles } from '../../TailwindControls/Font/FontStyles';
import { SpacingStyles } from '../../TailwindControls/Spacing/SpacingStyles';
import { TransitionStyles } from '../../TailwindControls/Transition/TransitionStyles';
import { getStyles } from '../../utils';

class PageStyle implements IStyle {
  font: FontStyles;
  color?: ColorStyle[];
  spacing: SpacingStyles;
  transition: TransitionStyles;
  getMarkup = (): string => {
    return `<body class="p-0 h-full w-full m-0 ${this.toStyles()}">
Your Content
</body>`;
  };

  constructor(init?: Partial<PageStyle>) {
    this.font = new FontStyles();
    this.spacing = new SpacingStyles();
    this.transition = new TransitionStyles();
    this.color = [new ColorStyle()];
    Object.assign(this, init);
  }
  toStyles = () => {
    return getStyles([this.color, this.font, this.spacing, this.transition]);
  };
}

export { PageStyle };
