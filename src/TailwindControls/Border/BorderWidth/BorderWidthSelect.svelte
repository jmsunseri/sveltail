<script lang="ts">
  import { borderWidthOptions } from './borderWidth';
  import Select from '../../../Components/Select/Select.svelte';
  import SelectOption from '../../../Components/Select/SelectOption.svelte';
  import { selectStyles } from '../../../StyleDefinitions/SveltailStyles';

  export let value: string;
  let select: Select;
</script>

<Select
  bind:this={select}
  bind:value
  placeholder="Border Width"
  styles={selectStyles}>
  {#each borderWidthOptions as option}
    <SelectOption value={option} {select}>
      <div>{option}</div>
    </SelectOption>
  {/each}
</Select>
