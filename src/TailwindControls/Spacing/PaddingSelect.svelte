<script lang="ts">
  import Select from '../../Components/Select/Select.svelte';
  import SelectOption from '../../Components/Select/SelectOption.svelte';
  import { selectStyles } from '../../StyleDefinitions/SveltailStyles';

  const marginOptions: string[] = ['p', 'py', 'px', 'pt', 'pr', 'pb', 'pl'];
  export let value: string;
  let select: Select;
</script>

<Select
  placeholder="Padding"
  bind:value
  bind:this={select}
  styles={selectStyles}>
  {#each marginOptions as option}
    <SelectOption value={option} {select}>{option}</SelectOption>
  {/each}
</Select>
