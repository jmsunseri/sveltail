<script lang="ts">
  import Select from '../../Components/Select/Select.svelte';
  import SelectOption from '../../Components/Select/SelectOption.svelte';
  import { selectStyles } from '../../StyleDefinitions/SveltailStyles';

  const options: string[] = [
    '*',
    'ring-0',
    'ring-1',
    'ring-2',
    'ring-4',
    'ring-8',
    'ring',
    'ring-inset',
  ];
  export let value: string;
  let select: Select;
</script>

<Select
  bind:value
  bind:this={select}
  placeholder="Ring Width"
  styles={selectStyles}>
  {#each options as option}
    <SelectOption value={option} {select}>{option}</SelectOption>
  {/each}
</Select>
