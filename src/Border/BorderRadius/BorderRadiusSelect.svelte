<script lang="ts">
  import { borderRadiusOptions } from './borderRadius';
  import Select from '../../Components/Select/Select.svelte';
  import SelectOption from '../../Components/Select/SelectOption.svelte';

  export let value: string;
  export let isMenuOpen: boolean;
</script>

<Select
  on:click
  label={value}
  {isMenuOpen}
  menuStyles={['bg-white', 'rounded-sm', 'border', 'shadow-md', 'py-1', 'px-2', 'h-72', 'overflow-auto']}
  buttonStyles={['rounded-sm', 'py-1', 'px-2', 'w-full']}>
  {#each borderRadiusOptions as option}
    <SelectOption value={option.value} on:selected>
      <div class={`m-2 p-2 border-solid border-2 border-black ${option.value}`}>
        {option.value}
      </div>
    </SelectOption>
  {/each}
</Select>
