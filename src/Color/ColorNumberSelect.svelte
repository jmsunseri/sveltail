<script lang="ts">
  import Select from '../Components/Select/Select.svelte';
  import SelectOption from '../Components/Select/SelectOption.svelte';
  import type { ColorNumber } from './color';
  import { numbers } from './color';
  export let label: ColorNumber;
  export let buttonStyles: string[];
  export let menuStyles: string[];
  export let menuItemStyles: string[];
  export let isMenuOpen: boolean = false;

  const items = numbers;
</script>

<Select
  label={label || 'Number'}
  {buttonStyles}
  {menuStyles}
  {isMenuOpen}
  on:click>
  {#each items as number}
    <SelectOption styles={menuItemStyles} on:selected value={number}>
      {number}
    </SelectOption>
  {/each}
</Select>
