<script lang="ts">
  import { borderWidthOptions } from './borderWidth';
  import Select from '@comp/Select/Select.svelte';
  import SelectOption from '@comp/Select/SelectOption.svelte';

  export let value: string;
  let select: Select;
</script>

<Select
  bind:this={select}
  bind:value
  placeholder="Border Width"
  menuStyles={['bg-white', 'rounded-sm', 'border', 'shadow-md', 'py-1', 'px-2', 'h-80', 'overflow-auto', 'w-full']}
  buttonStyles={['rounded-sm', 'py-1', 'px-2', 'w-full']}>
  {#each borderWidthOptions as option}
    <SelectOption value={option} {select}>
      <div class={`m-2 p-2 border-solid border-black ${option}`}>{option}</div>
    </SelectOption>
  {/each}
</Select>
