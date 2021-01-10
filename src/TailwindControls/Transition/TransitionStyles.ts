import type { IStyle } from '../../IStyle';
import { getStyles } from '../../utils';

class TransitionStyles implements IStyle {
  transition: string;
  duration: string;
  timing: string;
  delay: string;

  constructor(init?: Partial<TransitionStyles>) {
    Object.assign(this, init);
  }

  toStyles = () =>
    getStyles([this.transition, this.duration, this.timing, this.delay]);
}

export { TransitionStyles };
