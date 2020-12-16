<script lang="ts">
  import Select from '@comp/Select/Select.svelte';
  import SelectOption from '@comp/Select/SelectOption.svelte';

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
  menuStyles={['bg-white', 'rounded-sm', 'border', 'shadow-md', 'py-1', 'px-2']}
  buttonStyles={['rounded-sm', 'py-1', 'px-2', 'w-full']}>
  {#each marginOptions as option}
    <SelectOption value={option} {select}>{option}</SelectOption>
  {/each}
</Select>
