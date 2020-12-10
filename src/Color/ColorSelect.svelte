<script lang="ts">
  import type { Color, ColorNumber } from './color';

  import ColorNameSelect from './ColorNameSelect.svelte';
  import ColorNumberSelect from './ColorNumberSelect.svelte';

  let color: Color;
  let isColorMenuOpen: boolean = false;

  let number: ColorNumber = '500';
  let isColorNumberMenuOpen: boolean = false;

  export let buttonStyles: string[];
  export let menuStyles: string[];
  export let menuItemStyles: string[];

  export let prefix: string;
  export let value: string;

  const updateColor = () => {
    if (prefix && color && number) {
      if (color === 'black' || color === 'white') {
        value = `${prefix}-${color}`;
      } else {
        value = `${prefix}-${color}-${number}`;
      }
    } else if (prefix && (color === 'black' || color === 'white')) {
      value = `${prefix}-${color}`;
    } else {
      value = '';
    }
  };

  const onColorNameSelected = (event: any) => {
    color = event.detail;
    isColorMenuOpen = false;
    updateColor();
  };

  const onColorNameClick = () => {
    isColorMenuOpen = !isColorMenuOpen;
  };

  const onColorNumberSelected = (event: any) => {
    number = event.detail;
    isColorNumberMenuOpen = false;
    updateColor();
  };

  const onColorNumberClick = () => {
    isColorNumberMenuOpen = !isColorNumberMenuOpen;
  };
</script>

<div class="flex flex-row items-center gap-1">
  <ColorNameSelect
    label={color || 'color'}
    on:selected={onColorNameSelected}
    on:click={onColorNameClick}
    isMenuOpen={isColorMenuOpen}
    {buttonStyles}
    {menuStyles}
    {menuItemStyles} />
  <ColorNumberSelect
    label={number}
    on:selected={onColorNumberSelected}
    on:click={onColorNumberClick}
    isMenuOpen={isColorNumberMenuOpen}
    {buttonStyles}
    {menuStyles}
    {menuItemStyles} />
</div>
