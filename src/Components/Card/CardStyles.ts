import type { IStyle } from '../../IStyle';
import { BorderStyles } from '../../TailwindControls/Border/BorderStyles';
import type { ColorStyle } from '../../TailwindControls/Color/ColorStyle';
import type { EffectsStyle } from '../../TailwindControls/Effects/EffectsStyle';
import { SpacingStyles } from '../../TailwindControls/Spacing/SpacingStyles';
import type { TransformStyles } from '../../TailwindControls/Transform/TransformStyles';
import { TransitionStyles } from '../../TailwindControls/Transition/TransitionStyles';
import { getStyles } from '../../utils';
import { CardPartStyles } from './CardPartStyles';

class CardStyles implements IStyle {
  color?: ColorStyle[];
  border?: BorderStyles;
  effects?: EffectsStyle[];
  spacing?: SpacingStyles;
  header?: CardPartStyles;
  footer?: CardPartStyles;
  container?: CardPartStyles;
  transform?: TransformStyles[];
  transition?: TransitionStyles;
  getMarkup = (): string => {
    return `<div class="${this.toStyles()}">
    <div class="${this.header.toStyles()}">
      Card Header
    </div>
  <div class="${this.container.toStyles()}">
    body content
  </div>
    <div class="${this.footer.toStyles()}">
      Some footer content!
    </div>
</div>`;
  };

  constructor(init?: Partial<CardStyles>) {
    this.border = new BorderStyles();
    this.effects = [];
    this.spacing = new SpacingStyles();
    this.header = new CardPartStyles();
    this.footer = new CardPartStyles();
    this.container = new CardPartStyles();
    this.transform = [];
    this.color = [];
    this.transition = new TransitionStyles();
    Object.assign(this, init);
  }

  toStyles = () =>
    getStyles([
      this.color,
      this.border,
      this.effects,
      this.spacing,
      this.transform,
      this.transition,
    ]);
}

export { CardStyles };
