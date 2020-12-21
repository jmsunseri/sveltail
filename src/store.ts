import { writable } from 'svelte/store';
import type { ButtonStyles } from './Components/Button/Models/ButtonStyles';
import type { HeaderStyle } from './Components/Header/HeaderStyle';
import type { SelectStyles } from './Components/Select/SelectStyle';
import type { GlobalStyle } from './Components/Styles/GlobalStyle';
import {
  primaryButton,
  secondaryButton,
  header,
  select,
  viewer,
} from './StyleDefinitions/DefaultStyles';

const headerStyles = writable<HeaderStyle>(header);
const primaryButtonStyles = writable<ButtonStyles>(primaryButton);
const secondaryButtonStyles = writable<ButtonStyles>(secondaryButton);
const selectStyles = writable<SelectStyles>(select);
const viewerStyles = writable<GlobalStyle>(viewer);

export {
  headerStyles,
  primaryButtonStyles,
  secondaryButtonStyles,
  selectStyles,
  viewerStyles,
};
