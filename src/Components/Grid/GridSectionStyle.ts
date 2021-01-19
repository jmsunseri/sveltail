import type { Breakpoint } from '../../Breakpoint';
import type { IStyle } from '../../IStyle';
import { getStyles } from '../../utils';

class GridSectionStyle implements IStyle {
  columnStart?: string;
  columnEnd?: string;
  columnSpan?: string;
  rowStart?: string;
  rowEnd?: string;
  rowSpan?: string;
  breakpoint?: Breakpoint;

  getMarkup?: () => string;

  constructor(init?: Partial<GridSectionStyle>) {
    Object.assign(this, init);
  }

  toStyles = () =>
    getStyles([
      this.columnStart,
      this.columnEnd,
      this.columnSpan,
      this.rowStart,
      this.rowEnd,
      this.rowSpan,
    ]);
}

export { GridSectionStyle };
