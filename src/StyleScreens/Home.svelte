<script lang="ts">
  import { createEventDispatcher, SvelteComponentTyped } from 'svelte';
  import { Refresh, ColorSwatch } from 'tabler-icons-svelte';
  import { slide } from 'svelte/transition';
  import type { IBreadcrumbEvent } from '../Components/Breadcrumb/Breadcrumb';
  import TextFieldStyler from './TextFieldStyler.svelte';
  import StyleMenuButton from './StyleMenuButton.svelte';
  import ButtonMenu from './Button/ButtonMenu.svelte';
  import TableMenu from './Table/TableMenu.svelte';
  import CheckboxStyler from './CheckboxStyler.svelte';
  import CardMenu from './Card/CardMenu.svelte';
  import SelectMenu from './Select/SelectMenu.svelte';
  import Select from '../Components/Select/Select.svelte';
  import {
    selectStyles as sveltailSelectStyle,
    tooltip,
  } from '../StyleDefinitions/SveltailStyles';
  import SelectOption from '../Components/Select/SelectOption.svelte';
  import { reset, selectedTheme } from '../store';
  import IconButton from '../Components/Button/IconButton.svelte';
  import Tooltip from '../Components/Tooltip/Tooltip.svelte';
  import TooltipStyler from './TooltipStyler.svelte';
  import PageStyler from './Page/PageStyler.svelte';
  import HeaderMenu from './Header/HeaderMenu.svelte';

  const dispatch = createEventDispatcher();
  let select: any;
  let resetButton: any;

  const navigate = (text: string, component: any) => {
    dispatch('navigate', { text, component } as IBreadcrumbEvent);
  };
</script>

<div transition:slide class="grid gap-2 grid-cols-3">
  <div bind:this={resetButton} class="col-span-3 flex items-center gap-3">
    <Select
      bind:this={select}
      bind:value={$selectedTheme}
      mustHaveValue
      styles={sveltailSelectStyle}>
      <SelectOption value="Default Theme" {select}>Default Theme</SelectOption>
      <SelectOption value="Blank Slate Theme" {select}>
        Blank Slate Theme
      </SelectOption>
      <SelectOption value="Get Hub Theme" {select}>Get Hub Theme</SelectOption>
      <SelectOption value="Tweet Dark Theme" {select}>
        Tweet Dark Theme
      </SelectOption>
    </Select>
    <Tooltip styles={tooltip}>
      <div slot="tooltip">reset theme</div>
      <IconButton
        on:click={() => reset && reset()}
        styles={['border-none', 'fill-current', 'text-blue-300', 'focus:outline-none']}>
        <Refresh size={30} />
      </IconButton>
    </Tooltip>
  </div>
  <StyleMenuButton text="Page" on:click={() => navigate('Page', PageStyler)}>
    <ColorSwatch size={40} />
  </StyleMenuButton>
  <StyleMenuButton text="Table" on:click={() => navigate('Table', TableMenu)}>
    <ColorSwatch size={40} />
  </StyleMenuButton>
  <StyleMenuButton
    text="Header"
    on:click={() => navigate('Header', HeaderMenu)}>
    <ColorSwatch size={40} />
  </StyleMenuButton>
  <StyleMenuButton
    text="Button"
    on:click={() => navigate('Button', ButtonMenu)}>
    <ColorSwatch size={40} />
  </StyleMenuButton>
  <StyleMenuButton
    text="Text Field"
    on:click={() => navigate('Text Field', TextFieldStyler)}>
    <ColorSwatch size={40} />
  </StyleMenuButton>
  <StyleMenuButton
    text="Checkbox"
    on:click={() => navigate('Checkbox', CheckboxStyler)}>
    <ColorSwatch size={40} />
  </StyleMenuButton>
  <StyleMenuButton
    text="Select"
    on:click={() => navigate('Select', SelectMenu)}>
    <ColorSwatch size={40} />
  </StyleMenuButton>
  <StyleMenuButton text="Card" on:click={() => navigate('Card', CardMenu)}>
    <ColorSwatch size={40} />
  </StyleMenuButton>
  <StyleMenuButton
    text="Tooltip"
    on:click={() => navigate('Tooltip', TooltipStyler)}>
    <ColorSwatch size={40} />
  </StyleMenuButton>
</div>
