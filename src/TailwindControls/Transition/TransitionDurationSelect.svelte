<script lang="ts">
  import Select from '../../Components/Select/Select.svelte';
  import SelectOption from '../../Components/Select/SelectOption.svelte';
  import { selectStyles } from '../../StyleDefinitions/SveltailStyles';

  const options: string[] = [
    'duration-75',
    'duration-100',
    'duration-150',
    'duration-200',
    'duration-300',
    'duration-500',
    'duration-700',
    'duration-1000',
  ];
  export let value: string;
  let select: Select;
</script>

<Select
  bind:this={select}
  bind:value
  placeholder="Duration"
  styles={selectStyles}>
  {#each options as option}
    <SelectOption value={option} {select}>
      <div>{option}</div>
    </SelectOption>
  {/each}
</Select>
