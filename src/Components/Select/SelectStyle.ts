import type { IStyle } from '../../IStyle';
import { getStyles } from '../../utils';
import { ButtonStyles } from '../Button/Models/ButtonStyles';
import { MenuStyles } from './MenuStyles';
import { SelectOptionStyles } from './SelectOptionStyle';
import clone from 'lodash/cloneDeep';

class SelectStyles implements IStyle {
  button?: ButtonStyles;
  menu?: MenuStyles;
  menuItem?: SelectOptionStyles;
  default: SelectStyles;

  reset = (): SelectStyles => {
    this.button.reset();
    this.menu.reset();
    this.menuItem.reset();
    return this;
  };

  /**
   *
   */
  constructor(init?: Partial<SelectStyles>) {
    this.button = new ButtonStyles();
    this.menu = new MenuStyles();
    this.menuItem = new SelectOptionStyles();
    Object.assign(this, init);
    this.default = clone<SelectStyles>(this);
  }

  toStyles = () => getStyles([this.button, this.menuItem, this.menu]);
}

export { SelectStyles };
