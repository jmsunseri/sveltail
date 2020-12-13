<script lang="ts">
  import Select from '../Components/Select/Select.svelte';
  import SelectOption from '../Components/Select/SelectOption.svelte';

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
  export let value: string = 'm';
  export let isMenuOpen: boolean;
</script>

<Select
  on:click
  label={value}
  {isMenuOpen}
  menuStyles={['bg-white', 'rounded-sm', 'border', 'shadow-md', 'py-1', 'px-2']}
  buttonStyles={['rounded-sm', 'py-1', 'px-2', 'w-full']}>
  {#each marginOptions as option}
    <SelectOption value={option} on:selected>{option}</SelectOption>
  {/each}
</Select>
