<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import IoIosBrowsers from 'svelte-icons/io/IoIosBrowsers.svelte';
  import { slide } from 'svelte/transition';
  import type { IBreadcrumbEvent } from '../Components/Breadcrumb/Breadcrumb';
  import GlobalStyler from './Global/GlobalStyler.svelte';
  import TextFieldStyler from './TextFieldStyler.svelte';
  import StyleMenuButton from './StyleMenuButton.svelte';
  import ButtonMenu from './Button/ButtonMenu.svelte';
  import HeaderStyler from './HeaderStyler.svelte';
  import TableMenu from './Table/TableMenu.svelte';
  import CheckboxStyler from './CheckboxStyler.svelte';
  import CardMenu from './Card/CardMenu.svelte';
  import SelectMenu from './Select/SelectMenu.svelte';
  import Select from '../Components/Select/Select.svelte';
  import { selectStyles as sveltailSelectStyle } from '../StyleDefinitions/SveltailStyles';
  import SelectOption from '../Components/Select/SelectOption.svelte';
  import { getInstance as getDefaultInstance } from '../StyleDefinitions/ViewerThemes/DefaultStyles';
  import { getInstance as getBlankSlateInstance } from '../StyleDefinitions/ViewerThemes/BlankSlateStyles';
  import {
    cardStyles,
    checkboxStyles,
    headerStyles,
    primaryButtonStyles,
    secondaryButtonStyles,
    selectStyles,
    tableStyles,
    textFieldStyles,
    viewerStyles,
    selectedTheme,
  } from '../store';
  import type { IViewerTheme } from '../StyleDefinitions/IViewer';
  import IconButton from '../Components/Button/IconButton.svelte';
  import FaUndo from 'svelte-icons/fa/FaUndo.svelte';

  const dispatch = createEventDispatcher();
  let select: any;
  let theme: string = $selectedTheme;

  const navigate = (text: string, component: any) => {
    dispatch('navigate', { text, component } as IBreadcrumbEvent);
  };

  const reset = () => {
    $headerStyles = $headerStyles.reset();
    $primaryButtonStyles = $primaryButtonStyles.reset();
    $secondaryButtonStyles = $secondaryButtonStyles.reset();
    $selectStyles = $selectStyles.reset();
    $viewerStyles = $viewerStyles.reset();
    $textFieldStyles = $textFieldStyles.reset();
    $checkboxStyles = $checkboxStyles.reset();
    $tableStyles = $tableStyles.reset();
    $cardStyles = $cardStyles.reset();
  };

  $: {
    if (theme !== $selectedTheme) {
      const newTheme: IViewerTheme = {};
      $selectedTheme = theme;
      if (theme === 'Default Theme') {
        Object.assign(newTheme, getDefaultInstance());
      } else if (theme === 'Blank Slate Theme') {
        Object.assign(newTheme, getBlankSlateInstance());
      }

      $headerStyles = newTheme.header;
      $primaryButtonStyles = newTheme.primaryButton;
      $secondaryButtonStyles = newTheme.secondaryButton;
      $selectStyles = newTheme.select;
      $viewerStyles = newTheme.viewer;
      $textFieldStyles = newTheme.textField;
      $checkboxStyles = newTheme.checkbox;
      $tableStyles = newTheme.table;
      $cardStyles = newTheme.card;
    }
  }
</script>

<div transition:slide class="grid gap-2 grid-cols-3">
  <div class="col-span-3 flex items-center gap-3">
    <Select bind:this={select} bind:value={theme} styles={sveltailSelectStyle}>
      <SelectOption value="Default Theme" {select}>Default Theme</SelectOption>
      <SelectOption value="Blank Slate Theme" {select}>
        Blank Slate Theme
      </SelectOption>
    </Select>
    <IconButton
      on:click={reset}
      styles={['h-6', 'w-6', 'border-none', 'fill-current', 'text-blue-300', 'focus:outline-none']}>
      <FaUndo />
    </IconButton>
  </div>
  <StyleMenuButton
    text="Global"
    on:click={() => navigate('Global', GlobalStyler)}>
    <IoIosBrowsers />
  </StyleMenuButton>
  <StyleMenuButton text="Table" on:click={() => navigate('Table', TableMenu)}>
    <IoIosBrowsers />
  </StyleMenuButton>
  <StyleMenuButton
    text="Header"
    on:click={() => navigate('Header', HeaderStyler)}>
    <IoIosBrowsers />
  </StyleMenuButton>
  <StyleMenuButton
    text="Button"
    on:click={() => navigate('Button', ButtonMenu)}>
    <IoIosBrowsers />
  </StyleMenuButton>
  <StyleMenuButton
    text="Text Field"
    on:click={() => navigate('Text Field', TextFieldStyler)}>
    <IoIosBrowsers />
  </StyleMenuButton>
  <StyleMenuButton
    text="Checkbox"
    on:click={() => navigate('Checkbox', CheckboxStyler)}>
    <IoIosBrowsers />
  </StyleMenuButton>
  <StyleMenuButton
    text="Select"
    on:click={() => navigate('Select', SelectMenu)}>
    <IoIosBrowsers />
  </StyleMenuButton>
  <StyleMenuButton text="Card" on:click={() => navigate('Card', CardMenu)}>
    <IoIosBrowsers />
  </StyleMenuButton>
</div>
