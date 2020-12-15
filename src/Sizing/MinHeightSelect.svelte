<script lang="ts">
  import Select from '../Components/Select/Select.svelte';
  import SelectOption from '../Components/Select/SelectOption.svelte';

  const heightOptions: string[] = ['', 'min-h-0', 'min-h-full', 'min-h-screen'];
  export let value: string;
  let select: Select;
</script>

<Select
  bind:value
  placeholder="Min Height"
  bind:this={select}
  menuStyles={['bg-white', 'rounded-sm', 'border', 'shadow-md', 'py-1', 'px-2']}
  buttonStyles={['rounded-sm', 'py-1', 'px-2', 'w-full']}>
  {#each heightOptions as option}
    <SelectOption value={option} {select}>{option}</SelectOption>
  {/each}
</Select>
