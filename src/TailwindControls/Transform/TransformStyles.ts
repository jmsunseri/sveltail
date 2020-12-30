import type { IStyle } from '../../IStyle';
import clone from 'lodash/cloneDeep';
import type { TransitionStyles } from '../Transition/TransitionStyles';

class TransformStyles implements IStyle {
  origin: string;
  scale: string;
  rotate: string;
  translate: string;
  skew: string;
  onHover: boolean = false;
  default: TransformStyles;

  reset = (): TransformStyles => {
    const { origin, scale, rotate, translate, skew, onHover } = this.default;
    Object.assign(this, { origin, scale, rotate, translate, skew, onHover });
    return this;
  };

  /**
   *
   */
  constructor(init?: Partial<TransformStyles>) {
    Object.assign(this, init);
    this.default = clone<TransformStyles>(this);
  }

  toStyles = () => {
    let styles = [
      this.origin,
      this.scale,
      this.rotate,
      this.translate,
      this.skew,
    ]
      .filter((x) => !!x)
      .map((x) => (this.onHover ? `hover:${x}` : x))
      .join(' ')
      .trim();

    if (styles) {
      return `transform-gpu ${styles}`;
    } else {
      return styles;
    }
  };
}

export { TransformStyles };
