<script lang="ts">
  import Select from '../../Components/Select/Select.svelte';
  import SelectOption from '../../Components/Select/SelectOption.svelte';
  import { selectStyles } from '../../StyleDefinitions/SveltailStyles';

  const options: string[] = [
    'ring-offset-0',
    'ring-offset-1',
    'ring-offset-2',
    'ring-offset-4',
    'ring-offset-8',
  ];
  export let value: string;
  let select: Select;
</script>

<Select
  bind:value
  bind:this={select}
  placeholder="Ring Offset Width"
  styles={selectStyles}>
  {#each options as option}
    <SelectOption value={option} {select}>{option}</SelectOption>
  {/each}
</Select>
