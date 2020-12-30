import { writable } from 'svelte/store';
import type { ButtonStyles } from './Components/Button/Models/ButtonStyles';
import type { CardStyles } from './Components/Card/CardStyles';
import type { CheckboxStyles } from './Components/Checkbox/CheckboxStyles';
import type { HeaderStyle } from './Components/Header/HeaderStyle';
import type { SelectStyles } from './Components/Select/SelectStyle';
import type { GlobalStyle } from './Components/Viewer/GlobalStyle';
import type { TableStyles } from './Components/Table/TableStyles';
import type { TextFieldStyles } from './Components/TextField/TextFieldStyles';
import { getInstance } from './StyleDefinitions/ViewerThemes/DefaultStyles';

const defaultTheme = getInstance();

const headerStyles = writable<HeaderStyle>(defaultTheme.header);
const primaryButtonStyles = writable<ButtonStyles>(defaultTheme.primaryButton);
const secondaryButtonStyles = writable<ButtonStyles>(
  defaultTheme.secondaryButton
);
const selectStyles = writable<SelectStyles>(defaultTheme.select);
const viewerStyles = writable<GlobalStyle>(defaultTheme.viewer);
const textFieldStyles = writable<TextFieldStyles>(defaultTheme.textField);
const checkboxStyles = writable<CheckboxStyles>(defaultTheme.checkbox);
const tableStyles = writable<TableStyles>(defaultTheme.table);
const cardStyles = writable<CardStyles>(defaultTheme.card);

const selectedTheme = writable<string>('Default Theme');

export {
  headerStyles,
  primaryButtonStyles,
  secondaryButtonStyles,
  selectStyles,
  viewerStyles,
  textFieldStyles,
  checkboxStyles,
  tableStyles,
  cardStyles,
  selectedTheme,
};
