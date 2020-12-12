<script lang="ts">
  import { borderWidthOptions } from './borderWidth';
  import Select from '../../Components/Select/Select.svelte';
  import SelectOption from '../../Components/Select/SelectOption.svelte';

  export let value: string = 'border-2';
  export let isMenuOpen: boolean;
</script>

<Select
  on:click
  label={value}
  {isMenuOpen}
  menuStyles={['bg-white', 'rounded-sm', 'border', 'shadow-md', 'py-1', 'px-2', 'h-80', 'overflow-auto', 'w-full']}
  buttonStyles={['rounded-sm', 'py-1', 'px-2', 'w-full']}>
  {#each borderWidthOptions as option}
    <SelectOption value={option.value} on:selected>
      <div class={`m-2 p-2 border-solid border-black ${option.value}`}>
        {option.value}
      </div>
    </SelectOption>
  {/each}
</Select>
