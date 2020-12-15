<script lang="ts">
  import Select from '../Components/Select/Select.svelte';
  import SelectOption from '../Components/Select/SelectOption.svelte';

  const widthOptions: string[] = [
    '',
    'max-w-0',
    'max-w-none',
    'max-w-xs',
    'max-w-sm',
    'max-w-md',
    'max-w-lg',
    'max-w-xl',
    'max-w-2xl',
    'max-w-3xl',
    'max-w-4xl',
    'max-w-5xl',
    'max-w-6xl',
    'max-w-7xl',
    'max-w-full',
    'max-w-min',
    'max-w-max',
    'max-w-prose',
    'max-w-screen-sm',
    'max-w-screen-md',
    'max-w-screen-lg',
    'max-w-screen-xl',
    'max-w-screen-2xl',
  ];
  export let value: string;
  let select: Select;
</script>

<Select
  bind:value
  placeholder="Max Width"
  bind:this={select}
  menuStyles={['bg-white', 'rounded-sm', 'border', 'shadow-md', 'py-1', 'px-2']}
  buttonStyles={['rounded-sm', 'py-1', 'px-2', 'w-full']}>
  {#each widthOptions as option}
    <SelectOption value={option} {select}>{option}</SelectOption>
  {/each}
</Select>
