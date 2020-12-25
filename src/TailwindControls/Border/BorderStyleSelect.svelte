<script lang="ts">
  import Select from '../../Components/Select/Select.svelte';
  import SelectOption from '../../Components/Select/SelectOption.svelte';
  import { selectStyles } from '../../StyleDefinitions/SveltailStyles';

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
  styles={selectStyles}>
  {#each styleOptions as option}
    <SelectOption value={option} {select}>
      <div>{option}</div>
    </SelectOption>
  {/each}
</Select>
