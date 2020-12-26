<script lang="ts">
  import Select from '../../Components/Select/Select.svelte';
  import SelectOption from '../../Components/Select/SelectOption.svelte';
  import { selectStyles } from '../../StyleDefinitions/SveltailStyles';

  const options: string[] = [
    'delay-75',
    'delay-100',
    'delay-150',
    'delay-200',
    'delay-300',
    'delay-500',
    'delay-700',
    'delay-1000',
  ];
  export let value: string;
  let select: Select;
</script>

<Select bind:this={select} bind:value placeholder="Delay" styles={selectStyles}>
  {#each options as option}
    <SelectOption value={option} {select}>
      <div>{option}</div>
    </SelectOption>
  {/each}
</Select>
