<script lang="ts">
  import Select from '../../Components/Select/Select.svelte';
  import SelectOption from '../../Components/Select/SelectOption.svelte';
  import { selectStyles } from '../../StyleDefinitions/SveltailStyles';

  export let value: string;

  const shadowOptions: string[] = [
    '',
    'shadow-sm',
    'shadow',
    'shadow-md',
    'shadow-lg',
    'shadow-xl',
    'shadow-2xl',
    'shadow-inner',
    'shadow-none',
  ];

  let select: Select;
</script>

<Select
  bind:this={select}
  bind:value
  placeholder="Box Shadow"
  styles={selectStyles}>
  {#each shadowOptions as option}
    <SelectOption value={option} {select}>
      <div>{option}</div>
    </SelectOption>
  {/each}
</Select>
