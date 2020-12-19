<script lang="ts">
  import Select from '../../Components/Select/Select.svelte';
  import SelectOption from '../../Components/Select/SelectOption.svelte';
  import { selectStyles } from '../../StyleDefinitions/SveltailStyles';

  const marginOptions: string[] = [
    'm',
    '-m',
    'my',
    'mx',
    '-my',
    '-mx',
    'mt',
    'mr',
    'mb',
    'ml',
    '-mt',
    '-mr',
    '-mb',
    '-ml',
  ];
  export let value: string;
  let select: Select;
</script>

<Select
  bind:value
  bind:this={select}
  placeholder="Margin"
  styles={selectStyles}>
  {#each marginOptions as option}
    <SelectOption value={option} {select}>{option}</SelectOption>
  {/each}
</Select>
