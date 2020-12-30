import type { IStyle } from '../../IStyle';
import { getStyles } from '../../utils';
import clone from 'lodash/cloneDeep';

class TransitionStyles implements IStyle {
  transition: string;
  duration: string;
  timing: string;
  delay: string;
  default: TransitionStyles;

  reset = (): TransitionStyles => {
    Object.assign(this, this.default);
    return this;
  };

  /**
   *
   */
  constructor(init?: Partial<TransitionStyles>) {
    Object.assign(this, init);
    this.default = clone<TransitionStyles>(this);
  }

  toStyles = () =>
    getStyles([this.transition, this.duration, this.timing, this.delay]);
}

export { TransitionStyles };
