import { writable } from 'svelte/store';
import type { ButtonStyles } from './Components/Button/Models/ButtonStyles';
import type { CheckboxStyles } from './Components/Checkbox/CheckboxStyles';
import type { HeaderStyle } from './Components/Header/HeaderStyle';
import type { SelectStyles } from './Components/Select/SelectStyle';
import type { GlobalStyle } from './Components/Styles/GlobalStyle';
import type { TableStyles } from './Components/Table/TableStyles';
import type { TextFieldStyles } from './Components/TextField/TextFieldStyles';
import {
  primaryButton,
  secondaryButton,
  header,
  select,
  viewer,
  textField,
  checkbox,
  table,
} from './StyleDefinitions/DefaultStyles';

const headerStyles = writable<HeaderStyle>(header);
const primaryButtonStyles = writable<ButtonStyles>(primaryButton);
const secondaryButtonStyles = writable<ButtonStyles>(secondaryButton);
const selectStyles = writable<SelectStyles>(select);
const viewerStyles = writable<GlobalStyle>(viewer);
const textFieldStyles = writable<TextFieldStyles>(textField);
const checkboxStyles = writable<CheckboxStyles>(checkbox);
const tableStyles = writable<TableStyles>(table);

export {
  headerStyles,
  primaryButtonStyles,
  secondaryButtonStyles,
  selectStyles,
  viewerStyles,
  textFieldStyles,
  checkboxStyles,
  tableStyles,
};
