<script lang="ts">
  import Select from '../Components/Select/Select.svelte';
  import SelectOption from '../Components/Select/SelectOption.svelte';

  const styleOptions: { value: string; display: string }[] = [
    { value: 'border-solid', display: 'Solid' },
    { value: 'border-dashed', display: 'Dashed' },
    { value: 'border-dotted', display: 'Dotted' },
    { value: 'border-double', display: 'Double' },
    { value: 'border-none', display: 'None' },
  ];
  export let value: string = 'border-solid';
  export let isMenuOpen: boolean;
</script>

<Select
  on:click
  label={value}
  {isMenuOpen}
  menuStyles={['bg-white', 'rounded-sm', 'border', 'shadow-md', 'py-1', 'px-2']}
  buttonStyles={['rounded-sm', 'py-1', 'px-2', 'w-full']}>
  {#each styleOptions as option}
    <SelectOption value={option.value} on:selected>
      <div class={`m-2 p-2 border-2 border-black ${option.value}`}>
        {option.value}
      </div>
    </SelectOption>
  {/each}
</Select>
