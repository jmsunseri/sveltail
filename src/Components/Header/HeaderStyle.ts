import type { IStyle } from '../../IStyle';
import { BorderStyles } from '../../TailwindControls/Border/BorderStyles';
import type { ColorStyle } from '../../TailwindControls/Color/ColorStyle';
import type { EffectsStyle } from '../../TailwindControls/Effects/EffectsStyle';
import { FontStyles } from '../../TailwindControls/Font/FontStyles';
import { SizingStyles } from '../../TailwindControls/Sizing/SizingStyles';
import { SpacingStyles } from '../../TailwindControls/Spacing/SpacingStyles';
import type { TransformStyles } from '../../TailwindControls/Transform/TransformStyles';
import { TransitionStyles } from '../../TailwindControls/Transition/TransitionStyles';
import { getStyles } from '../../utils';
import { IconStyles } from '../Button/Models/IconStyles';
import { HeaderPartStyle } from './HeaderPartStyle';

class HeaderStyle implements IStyle {
  font: FontStyles;
  color?: ColorStyle[];
  size: SizingStyles;
  border: BorderStyles;
  effects: EffectsStyle[];
  spacing: SpacingStyles;
  transform: TransformStyles[];
  transition: TransitionStyles;
  icon: IconStyles;
  brand: HeaderPartStyle;
  menu: HeaderPartStyle;
  getMarkup = (): string => {
    return `<div class="flex flex-row items-center gap-2 ${this.toStyles()}">
  <div class="${this.icon.toStyles()}" >
    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-smart-home" width="${
      this.icon.size
    }" height="${
      this.icon.size
    }" viewBox="0 0 24 24" stroke="currentColor" stroke-width="${
      this.icon.stroke
    }" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M19 8.71l-5.333 -4.148a2.666 2.666 0 0 0 -3.274 0l-5.334 4.148a2.665 2.665 0 0 0 -1.029 2.105v7.2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-7.2c0 -.823 -.38 -1.6 -1.03 -2.105"></path><path d="M16 15c-2.21 1.333 -5.792 1.333 -8 0"></path></svg>
  </div>
  <div class="${this.brand.toStyles()} flex-1">App Title</div>
  <div class="${this.menu.toStyles()}">
    <a class="text-base font-light hover:underline" href="/account" >
      Account
    </a>
  </div>
</div>`;
  };

  constructor(init?: Partial<HeaderStyle>) {
    this.font = new FontStyles();
    this.border = new BorderStyles();
    this.size = new SizingStyles();
    this.effects = [];
    this.spacing = new SpacingStyles();
    this.transform = [];
    this.color = [];
    this.transition = new TransitionStyles();
    this.icon = new IconStyles();
    this.brand = new HeaderPartStyle();
    this.menu = new HeaderPartStyle();
    Object.assign(this, init);
  }

  toStyles = () =>
    getStyles([
      this.color,
      this.font,
      this.border,
      this.effects,
      this.spacing,
      this.size,
      this.transform,
      this.transition,
    ]);
}

export { HeaderStyle };
