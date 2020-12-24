import { ButtonStyles } from '../Button/Models/ButtonStyles';
import { MenuStyles } from './MenuStyles';
import { SelectOptionStyles } from './SelectOptionStyle';

class SelectStyles {
  button?: ButtonStyles;
  menu?: MenuStyles;
  menuItem?: SelectOptionStyles;

  /**
   *
   */
  constructor(init?: Partial<SelectStyles>) {
    this.button = new ButtonStyles();
    this.menu = new MenuStyles();
    this.menuItem = new SelectOptionStyles();
    Object.assign(this, init);
  }
}

export { SelectStyles };
