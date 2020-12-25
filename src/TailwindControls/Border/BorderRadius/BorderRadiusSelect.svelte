<script lang="ts">
  import { borderRadiusOptions } from './borderRadius';
  import Select from '../../../Components/Select/Select.svelte';
  import SelectOption from '../../../Components/Select/SelectOption.svelte';
  import { selectStyles } from '../../../StyleDefinitions/SveltailStyles';

  export let value: string;

  let select: Select;
</script>

<Select
  bind:this={select}
  bind:value
  placeholder="Border Radius"
  styles={selectStyles}>
  {#each borderRadiusOptions as option}
    <SelectOption value={option} {select}>
      <div>{option}</div>
    </SelectOption>
  {/each}
</Select>
