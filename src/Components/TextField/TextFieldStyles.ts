import type { IStyle } from '../../IStyle';
import { BorderStyles } from '../../TailwindControls/Border/BorderStyles';
import type { ColorStyle } from '../../TailwindControls/Color/ColorStyle';
import { FontStyles } from '../../TailwindControls/Font/FontStyles';
import { PlaceholderStyles } from '../../TailwindControls/Placeholder/PlaceholderStyles';
import { RingStyles } from '../../TailwindControls/Ring/RingStyles';
import { SpacingStyles } from '../../TailwindControls/Spacing/SpacingStyles';
import type { TransformStyles } from '../../TailwindControls/Transform/TransformStyles';
import { TransitionStyles } from '../../TailwindControls/Transition/TransitionStyles';
import { getStyles } from '../../utils';
import { IconStyles } from '../Button/Models/IconStyles';
import clone from 'lodash/cloneDeep';
import type { EffectsStyle } from '../../TailwindControls/Effects/EffectsStyle';

class TextFieldStyles implements IStyle {
  font: FontStyles;
  color?: ColorStyle[];
  icon: IconStyles;
  border: BorderStyles;
  spacing: SpacingStyles;
  effects: EffectsStyle[];
  ring: RingStyles;
  transform: TransformStyles[];
  transition: TransitionStyles;
  placeholder: PlaceholderStyles;
  default: TextFieldStyles;
  name: string;
  getMarkup = (): string => {
    let container = getStyles([
      this.ring,
      this?.color,
      this?.border,
      this?.font,
      this?.spacing,
      this.transform,
      this.transition,
      this.effects,
      this.placeholder,
    ]);

    return `<div class="flex items-center">
  <input
    class="focus:outline-none min-w-0 flex-1 bg-transparent ${container}"
    type="text"
    placeholder="Placeholder" />
    <div class="relative right-8 ${this.icon?.toStyles()}">
      <svg>Some SVG ICON HERE</svg>
    </div>
</div>`;
  };

  reset = (): TextFieldStyles => {
    this.font.reset();
    this.color = this.color.slice(0, this.default.color.length);
    this.color.forEach((x) => x.reset());
    this.icon.reset();
    this.border.reset();
    this.spacing.reset();
    this.ring.reset();
    this.transform = this.transform.slice(0, this.default.transform.length);
    this.transform.forEach((x) => x.reset());
    this.transition.reset();
    this.effects = this.effects.slice(0, this.default.effects.length);
    this.effects.forEach((x) => x.reset());
    return this;
  };

  /**
   *
   */
  constructor(init?: Partial<TextFieldStyles>) {
    this.font = new FontStyles();
    this.border = new BorderStyles();
    this.icon = new IconStyles();
    this.spacing = new SpacingStyles();
    this.ring = new RingStyles();
    this.transform = [];
    this.color = [];
    this.transition = new TransitionStyles();
    this.placeholder = new PlaceholderStyles();
    this.effects = [];
    Object.assign(this, init);
    this.default = clone<TextFieldStyles>(this);
  }

  toStyles = () =>
    getStyles([
      this.color,
      this.font,
      this.border,
      this.spacing,
      this.ring,
      this.transform,
      this.transition,
      this.placeholder,
      this.effects,
    ]);
}

export { TextFieldStyles };
