import { ButtonStyles } from '../Button/Models/ButtonStyles';
import { MenuStyles } from './MenuStyles';

class SelectStyles {
  button: ButtonStyles;
  menu?: MenuStyles;
  menuItem: any;

  /**
   *
   */
  constructor(init?: Partial<SelectStyles>) {
    this.button = new ButtonStyles();
    this.menu = new MenuStyles();
    Object.assign(this, init);
  }
}

export { SelectStyles };
