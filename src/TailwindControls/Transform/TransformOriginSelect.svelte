<script lang="ts">
  import Select from '../../Components/Select/Select.svelte';
  import SelectOption from '../../Components/Select/SelectOption.svelte';
  import { selectStyles } from '../../StyleDefinitions/SveltailStyles';

  const options: string[] = [
    'origin-center',
    'origin-top',
    'origin-top-right',
    'origin-right',
    'origin-bottom-right',
    'origin-bottom',
    'origin-bottom-left',
    'origin-left',
    'origin-top-left',
  ];
  export let value: string;
  let select: Select;
</script>

<Select
  bind:this={select}
  bind:value
  placeholder="Origin"
  styles={selectStyles}>
  {#each options as option}
    <SelectOption value={option} {select}>
      <div>{option}</div>
    </SelectOption>
  {/each}
</Select>
