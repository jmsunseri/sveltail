<script lang="ts">
  import Select from '../../Components/Select/Select.svelte';
  import SelectOption from '../../Components/Select/SelectOption.svelte';

  const styleOptions: string[] = [
    'border-solid',
    'border-dashed',
    'border-dotted',
    'border-double',
    'border-none',
  ];
  export let value: string;
  let select: Select;
</script>

<Select
  bind:this={select}
  bind:value
  placeholder="Border Style"
  menuStyles={['bg-white', 'rounded-sm', 'border', 'shadow-md', 'py-1', 'px-2']}
  buttonStyles={['rounded-sm', 'py-1', 'px-2', 'w-full']}>
  {#each styleOptions as option}
    <SelectOption value={option} {select}>
      <div class="m-2 p-2">{option}</div>
    </SelectOption>
  {/each}
</Select>
