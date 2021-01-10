import { writable } from 'svelte/store';
import type { ButtonStyles } from './Components/Button/Models/ButtonStyles';
import type { CardStyles } from './Components/Card/CardStyles';
import type { CheckboxStyles } from './Components/Checkbox/CheckboxStyles';
import type { HeaderStyle } from './Components/Header/HeaderStyle';
import type { SelectStyles } from './Components/Select/SelectStyle';
import type { PageStyle } from './Components/Page/PageStyle';
import type { TableStyles } from './Components/Table/TableStyles';
import type { TextFieldStyles } from './Components/TextField/TextFieldStyles';
import { getInstance } from './StyleDefinitions/PageThemes/TwitterishDarkStyles';
import type { TooltipStyles } from './Components/Tooltip/TooltipStyles';
import type { IStyle } from './IStyle';
import type { IPageTheme } from './StyleDefinitions/IPageTheme';

const defaultTheme = getInstance();

const headerStyles = writable<HeaderStyle>(defaultTheme.header);
const primaryButtonStyles = writable<ButtonStyles>(defaultTheme.primaryButton);
const secondaryButtonStyles = writable<ButtonStyles>(
  defaultTheme.secondaryButton
);
const selectStyles = writable<SelectStyles>(defaultTheme.select);
const pageStyles = writable<PageStyle>(defaultTheme.viewer);
const textFieldStyles = writable<TextFieldStyles>(defaultTheme.textField);
const checkboxStyles = writable<CheckboxStyles>(defaultTheme.checkbox);
const tableStyles = writable<TableStyles>(defaultTheme.table);
const cardStyles = writable<CardStyles>(defaultTheme.card);
const tooltipStyles = writable<TooltipStyles>(defaultTheme.tooltip);
const selectedStyle = writable<IStyle>(defaultTheme.viewer);

const selectedTheme = writable<string>('Tweet Dark Theme');
const getNewInstance = writable<() => IPageTheme>(getInstance);

export {
  headerStyles,
  primaryButtonStyles,
  secondaryButtonStyles,
  selectStyles,
  pageStyles,
  textFieldStyles,
  checkboxStyles,
  tableStyles,
  cardStyles,
  selectedTheme,
  tooltipStyles,
  selectedStyle,
  getNewInstance,
};
