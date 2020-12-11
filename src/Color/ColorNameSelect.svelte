<script lang="ts">
  import Select from '../Components/Select/Select.svelte';
  import SelectOption from '../Components/Select/SelectOption.svelte';
  import type { Color } from './color';
  import { colors } from './color';

  export let buttonStyles: string[];
  export let menuStyles: string[];
  export let menuItemStyles: string[];
  export let label: string;
  export let isMenuOpen: boolean = false;

  const items: Color[] = colors;
</script>

<Select {label} {buttonStyles} {menuStyles} {isMenuOpen} on:click>
  {#each items as color}
    <SelectOption styles={menuItemStyles} on:selected value={color}>
      {color}
    </SelectOption>
  {/each}
</Select>
