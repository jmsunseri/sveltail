<script lang="ts">
  import Select from '../../Components/Select/Select.svelte';
  import SelectOption from '../../Components/Select/SelectOption.svelte';
  import { selectStyles } from '../../StyleDefinitions/SveltailStyles';

  const styleOptions: string[] = [
    'divide-solid',
    'divide-dashed',
    'divide-dotted',
    'divide-double',
    'divide-none',
  ];
  export let value: string;
  let select: Select;
</script>

<Select
  bind:this={select}
  bind:value
  placeholder="Divider Style"
  styles={selectStyles}>
  {#each styleOptions as option}
    <SelectOption value={option} {select}>
      <div class="m-2 p-2">{option}</div>
    </SelectOption>
  {/each}
</Select>
