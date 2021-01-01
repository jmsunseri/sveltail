import type { IStyle } from '../../IStyle';
import { BorderStyles } from '../../TailwindControls/Border/BorderStyles';
import type { ColorStyle } from '../../TailwindControls/Color/ColorStyle';
import type { EffectsStyle } from '../../TailwindControls/Effects/EffectsStyle';
import { SpacingStyles } from '../../TailwindControls/Spacing/SpacingStyles';
import type { TransformStyles } from '../../TailwindControls/Transform/TransformStyles';
import { TransitionStyles } from '../../TailwindControls/Transition/TransitionStyles';
import { getStyles } from '../../utils';
import { CardPartStyles } from './CardPartStyles';
import clone from 'lodash/cloneDeep';

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
  default: CardStyles;
  name: string;
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

  reset = (): CardStyles => {
    this.color = this.color.slice(0, this.default.color.length);
    this.color = this.color.map((x) => x.reset());
    this.border.reset();
    this.effects = this.effects.slice(0, this.default.effects.length);
    this.effects = this.effects.map((x) => x.reset());
    this.spacing.reset();
    this.transform = this.transform.slice(0, this.default.transform.length);
    this.transform = this.transform.map((x) => x.reset());
    this.transition.reset();
    return this;
  };

  /**
   *
   */
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
    this.default = clone(this);
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
