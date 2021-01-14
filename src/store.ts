import { writable, derived, get, Writable, Readable } from 'svelte/store';
import type { ButtonStyles } from './Components/Button/Models/ButtonStyles';
import type { CardStyles } from './Components/Card/CardStyles';
import type { CheckboxStyles } from './Components/Checkbox/CheckboxStyles';
import type { HeaderStyle } from './Components/Header/HeaderStyle';
import type { SelectStyles } from './Components/Select/SelectStyle';
import type { PageStyle } from './Components/Page/PageStyle';
import type { TableStyles } from './Components/Table/TableStyles';
import type { TextFieldStyles } from './Components/TextField/TextFieldStyles';
import { getInstance as getDefaultInstance } from './StyleDefinitions/PageThemes/DefaultStyles';
import { getInstance as getBlankSlateInstance } from './StyleDefinitions/PageThemes/BlankSlateStyles';
import { getInstance as getGetHubInstance } from './StyleDefinitions/PageThemes/GetHubStyles';
import { getInstance as getTweetInstance } from './StyleDefinitions/PageThemes/TwitterishDarkStyles';
import type { TooltipStyles } from './Components/Tooltip/TooltipStyles';
import type { IPageTheme } from './StyleDefinitions/IPageTheme';
import type { IStyle } from './IStyle';

export const themeProviders = writable<{ [key: string]: () => IPageTheme }>({
  'Default Theme': getDefaultInstance,
  'Blank Slate Theme': getBlankSlateInstance,
  'Get Hub Theme': getGetHubInstance,
  'Tweet Dark Theme': getTweetInstance,
});

type ThemeInitializer = () => IPageTheme;

const selectedTheme = writable<string>('Default Theme');

const getNewInstance = derived<any, ThemeInitializer>(
  [themeProviders, selectedTheme],
  ([$providers, $theme]) => $providers[$theme]
);

export let reset: VoidFunction;

const currentInstance = derived<Readable<ThemeInitializer>, IPageTheme>(
  getNewInstance,
  ($getNewInstance: ThemeInitializer, set: (theme: IPageTheme) => void) => {
    reset = () => {
      const instance = $getNewInstance();
      instance.selected = instance.viewer;
      set(instance);
    };
    reset(); // initialize
  }
);

const getWritableThemePart = <T>(
  currentTheme: Readable<IPageTheme>,
  getThemePart: (theme: IPageTheme) => T
): Writable<T> =>
  writable(getThemePart({}), (set: (x: T) => void) =>
    currentTheme.subscribe((theme: IPageTheme) => set(getThemePart(theme)))
  );

const headerStyles = getWritableThemePart<HeaderStyle>(
  currentInstance,
  ($theme: IPageTheme) => $theme.header
);
const primaryButtonStyles = getWritableThemePart<ButtonStyles>(
  currentInstance,
  ($theme) => $theme.primaryButton
);
const secondaryButtonStyles = getWritableThemePart<ButtonStyles>(
  currentInstance,
  ($theme) => $theme.secondaryButton
);
const selectStyles = getWritableThemePart<SelectStyles>(
  currentInstance,
  ($theme) => $theme.select
);
const pageStyles = getWritableThemePart<PageStyle>(
  currentInstance,
  ($theme) => $theme.viewer
);
const textFieldStyles = getWritableThemePart<TextFieldStyles>(
  currentInstance,
  ($theme) => $theme.textField
);
const checkboxStyles = getWritableThemePart<CheckboxStyles>(
  currentInstance,
  ($theme) => $theme.checkbox
);
const tableStyles = getWritableThemePart<TableStyles>(
  currentInstance,
  ($theme) => $theme.table
);
const cardStyles = getWritableThemePart<CardStyles>(
  currentInstance,
  ($theme) => $theme.card
);
const tooltipStyles = getWritableThemePart<TooltipStyles>(
  currentInstance,
  ($theme) => $theme.tooltip
);

const selectedStyle = getWritableThemePart<IStyle>(
  currentInstance,
  ($theme) => $theme.selected
);

// HMR handler
//
// NOTE this assumes that the only way this module can be impacted by a HMR
// update is if the theme providers change
//
// NOTE 2 AFAIK, last time I checked, Snowpack HMR doesn't support changing
// (adding, renaming...) the named exports of a module, so most update to the
// current module will probably need a full reload anyway
//

// @ts-ignore
if (import.meta.hot) {
  // @ts-ignore
  import.meta.hot.accept(({ module }) => {
    themeProviders.set(get(module.themeProviders));
  });
}

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
  getNewInstance,
  selectedStyle,
};
