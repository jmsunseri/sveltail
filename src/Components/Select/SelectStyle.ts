import type { IStyle } from '../../IStyle';
import { getStyles } from '../../utils';
import { ButtonStyles } from '../Button/Models/ButtonStyles';
import { MenuStyles } from './MenuStyles';
import { SelectOptionStyles } from './SelectOptionStyle';

class SelectStyles implements IStyle {
  button?: ButtonStyles;
  menu?: MenuStyles;
  menuItem?: SelectOptionStyles;
  getMarkup = (): string => {
    return `<span class="relative">
  <button class="${this.button.toStyles() + ' focus:outline-none'}">
    <span class="flex justify-between items-center gap-4">
      Value or placeholder
      <div class="${this.button.icon.toStyles()}">
        <svg> Some SVG icon of your choosing </svg>
      </div>
    </span>
  </button>
  <!--  Only if menu is open -->
    <div
      class="${
        this.menu.toStyles() +
        ' absolute z-10 overflow-auto w-full cursor-pointer'
      }">
      <div class="${this.menuItem.toStyles()}">Option 1</div>
      <div class="${this.menuItem.toStyles()}">Option 2</div>
      <div class="${this.menuItem.toStyles()}">Option 3</div>
    </div>
</span>`;
  };

  constructor(init?: Partial<SelectStyles>) {
    this.button = new ButtonStyles();
    this.menu = new MenuStyles();
    this.menuItem = new SelectOptionStyles();
    Object.assign(this, init);
  }

  toStyles = () => getStyles([this.button, this.menuItem, this.menu]);
}

export { SelectStyles };
