<script lang="ts">
  import Select from '../../Components/Select/Select.svelte';
  import SelectOption from '../../Components/Select/SelectOption.svelte';
  import { selectStyles } from '../../StyleDefinitions/SveltailStyles';

  const widthOptions: string[] = [
    'min-w-0',
    'min-w-full',
    'min-w-min',
    'min-w-max',
  ];
  export let value: string;
  let select: Select;
</script>

<Select
  bind:value
  placeholder="Min Width"
  bind:this={select}
  styles={selectStyles}>
  {#each widthOptions as option}
    <SelectOption value={option} {select}>{option}</SelectOption>
  {/each}
</Select>
