<script lang="ts">
  import Select from '../Components/Select/Select.svelte';
  import SelectOption from '../Components/Select/SelectOption.svelte';

  const widthOptions: string[] = [
    '',
    'min-w-0',
    'min-w-full',
    'min-w-min',
    'min-w-max',
  ];
  export let value: string = 'min-w-full';
  export let isMenuOpen: boolean;
</script>

<Select
  on:click
  label={value}
  {isMenuOpen}
  menuStyles={['bg-white', 'rounded-sm', 'border', 'shadow-md', 'py-1', 'px-2']}
  buttonStyles={['rounded-sm', 'py-1', 'px-2', 'w-full']}>
  {#each widthOptions as option}
    <SelectOption value={option} on:selected>{option}</SelectOption>
  {/each}
</Select>
