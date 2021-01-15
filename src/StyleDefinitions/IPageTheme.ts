import type { ButtonStyles } from '../Components/Button/Models/ButtonStyles';
import type { CardStyles } from '../Components/Card/CardStyles';
import type { CheckboxStyles } from '../Components/Checkbox/CheckboxStyles';
import type { HeaderStyle } from '../Components/Header/HeaderStyle';
import type { SelectStyles } from '../Components/Select/SelectStyle';
import type { TableStyles } from '../Components/Table/TableStyles';
import type { TextFieldStyles } from '../Components/TextField/TextFieldStyles';
import type { TooltipStyles } from '../Components/Tooltip/TooltipStyles';
import type { PageStyle } from '../Components/Page/PageStyle';
import type { IStyle } from '../IStyle';

interface IPageTheme {
  primaryButton?: ButtonStyles;
  secondaryButton?: ButtonStyles;
  textField?: TextFieldStyles;
  checkbox?: CheckboxStyles;
  header?: HeaderStyle;
  viewer?: PageStyle;
  select?: SelectStyles;
  table?: TableStyles;
  card?: CardStyles;
  tooltip?: TooltipStyles;
  selected?: IStyle;
}

export type { IPageTheme };
