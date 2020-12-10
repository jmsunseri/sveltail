<script lang="ts">
  import type { Color, ColorNumber } from './color';

  import ColorNameSelect from './ColorNameSelect.svelte';
  import ColorNumberSelect from './ColorNumberSelect.svelte';

  let color: Color;
  let number: ColorNumber;

  export let buttonStyles: string[];
  export let menuStyles: string[];
  export let menuItemStyles: string[];

  export let prefix: string;
  export let value: string;

  const onDropDownSelect = () => {
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
</script>

<div class="flex flex-row items-center gap-1">
  <ColorNameSelect
    bind:value={color}
    on:change={onDropDownSelect}
    {buttonStyles}
    {menuStyles}
    {menuItemStyles} />
  <ColorNumberSelect bind:value={number} on:change={onDropDownSelect} />
</div>
