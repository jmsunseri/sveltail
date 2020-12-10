<script lang="ts">
  import Select from '../Components/Select/Select.svelte';
  import SelectOption from '../Components/Select/SelectOption.svelte';
  import type { Color } from './color';
  export let value: Color = 'blue';
  export let buttonStyles: string[];
  export let menuStyles: string[];
  export let menuItemStyles: string[];

  const colors: Color[] = [
    'white',
    'black',
    'gray',
    'red',
    'yellow',
    'green',
    'blue',
    'indigo',
    'purple',
    'pink',
  ];
</script>

<Select bind:value placeHolder="Color" {buttonStyles} {menuStyles}>
  {#each colors as c}
    <SelectOption value={c} text={c} styles={menuItemStyles} />
  {/each}
</Select>

<!-- svelte-ignore a11y-no-onchange -->
<!-- <select bind:value on:change>
  <option />
  {#each colors as c}
    <option value={c}>{c}</option>
  {/each}
</select> -->
